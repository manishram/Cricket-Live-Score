import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import PointsTableRow from '../components/PointsTableRow'

const PointsTable = () => {
    return (
        <View style={styles.container}>
            <View style={styles.teamNameRow}>
                <Text style={styles.teamName}>Team Name</Text>
                <Text style={styles.m11}>M</Text>
                <Text style={styles.w}>W</Text>
                <Text style={styles.l}>L</Text>
                <Text style={styles.nrr}>NRR</Text>
                <Text style={styles.pts}>PTS</Text>
                <Text style={styles.last5}>LAST 5</Text>
            </View>
            <View style={styles.divider}></View>
            <PointsTableRow />
            <PointsTableRow />
            <PointsTableRow />
            <PointsTableRow />
            <PointsTableRow />
            <PointsTableRow />
            <PointsTableRow />
            <PointsTableRow />
            <PointsTableRow />
            <PointsTableRow />
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
