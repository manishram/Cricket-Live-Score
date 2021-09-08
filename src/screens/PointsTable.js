import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import PointsTableRow from '../components/PointsTableRow'
import RequestApi from '../api/RequestApi'

const PointsTable = () => {
    const cid = 118273
    const [pointsTable, setPointsTable] = useState([])
    const getPointsTable = async () => {
        try {
            const response = await RequestApi.get(
                `competitions/${cid}/standings/`,
                {
                    params: {},
                }
            )
            setPointsTable(response.data.response.standings[0].standings)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getPointsTable()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.teamNameRow}>
                <Text style={styles.teamName}>Team Name</Text>
                <Text style={styles.m11}>M</Text>
                <Text style={styles.w}>W</Text>
                <Text style={styles.l}>L</Text>
                <Text style={styles.nrr}>NRR</Text>
                <Text style={styles.pts}>PTS</Text>
                <Text style={styles.last5}>Last 5</Text>
            </View>
            <View style={styles.divider}></View>
            <FlatList
                data={pointsTable}
                keyExtractor={(pointsTable) => pointsTable.team_id}
                renderItem={(items) => {
                    return (
                        <PointsTableRow
                            name={items.item.team.abbr}
                            match={items.item.played}
                            win={items.item.win}
                            loss={items.item.loss}
                            nrr={items.item.netrr}
                            points={items.item.points}
                            image={items.item.team.thumb_url}
                            last5={items.item.lastfivematchresult}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 10 },
    teamNameRow: {
        height: 15,
        flexDirection: 'row',
        marginTop: 5,
    },
    teamName: {
        flex: 2,
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        justifyContent: 'center',
        textAlign: 'center',
    },
    m11: {
        textAlign: 'center',
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        flex: 1,
    },
    w: {
        fontFamily: 'inter-700',
        color: '#121212',
        textAlign: 'center',
        fontSize: 12,
        flex: 1,
    },
    l: {
        fontFamily: 'inter-700',
        color: '#121212',
        textAlign: 'center',
        fontSize: 12,
        flex: 1,
    },
    nrr: {
        fontFamily: 'inter-700',
        color: '#121212',
        textAlign: 'center',
        fontSize: 12,
        flex: 1.5,
    },
    pts: {
        fontFamily: 'inter-700',
        color: '#121212',
        textAlign: 'center',
        fontSize: 12,
        flex: 1,
    },
    last5: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        textAlign: 'center',
        flex: 2,
    },

    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#E6E6E6',
        marginTop: 5,
    },
})

export default PointsTable
