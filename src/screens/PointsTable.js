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
            setPointsTable(response.data.response.response)
            console.log(pointsTable)
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
                <Text style={styles.l}>D</Text>
                <Text style={styles.nrr}>NRR</Text>
                <Text style={styles.pts}>PTS</Text>
            </View>
            <View style={styles.divider}></View>
            <FlatList
                data={pointsTable}
                keyExtractor={(pointsTable) => pointsTable.team_id}
                renderItem={(items) => {
                    return (
                        <PointsTableRow
                            name={items.item.title}
                            match={items.item.played}
                            win={items.item.win}
                            loss={items.item.loss}
                            draw={items.item.draw}
                            nrr={items.item.netrr}
                            points={items.item.points}
                            image={items.item.thumb_url}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 10 },
    teamName: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
    },
    m11: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 17,
    },
    w: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 19,
    },
    l: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 22,
    },
    nrr: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 23,
    },
    pts: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 26,
    },
    last5: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 35,
    },
    teamNameRow: {
        height: 15,
        flexDirection: 'row',
        marginTop: 5,
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#E6E6E6',
        marginTop: 5,
    },
})

export default PointsTable
