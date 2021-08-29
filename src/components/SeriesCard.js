import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function SeriesCard(props) {
    const navigation = useNavigation()

    let seriesName = props.seriesData.title
    let season = props.seriesData.season
    let starting = props.seriesData.datestart
    let ending = props.seriesData.dateend
    let totalMatches = props.seriesData.total_matches
    let totalTeams = props.seriesData.total_rounds
    let matchType = props.seriesData.category
    let format = props.seriesData.game_format
    let cid = props.seriesData.cid
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('SeriesMatches', {
                    cid: cid,
                    seriesName: seriesName,
                    totalMatches: totalMatches,
                })
            }
        >
            <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.seriesName}>{seriesName}</Text>
                    <Text style={styles.season}>{season}</Text>
                </View>

                <View style={styles.line}></View>
                <View style={styles.infoRow}>
                    <Text style={styles.left}>Starting</Text>
                    <Text style={styles.right}>{starting}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.left}>Ending</Text>
                    <Text style={styles.right}>{ending}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.left}>Total Matches</Text>
                    <Text style={styles.right}>{totalMatches}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.left}>Total Teams</Text>
                    <Text style={styles.right}>{totalTeams}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.left}>Match Type</Text>
                    <Text style={styles.right}>{matchType}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.left}>Format</Text>
                    <Text
                        style={[styles.right, { textTransform: 'uppercase' }]}
                    >
                        {format}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: 'rgba(249,249,249,1)',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom: 10,
    },
    line: {
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    seriesName: {
        fontFamily: 'inter-700',
        margin: 10,
    },
    season: {
        fontFamily: 'inter-500',
        margin: 10,
        color: 'rgba(0,0,0,0.25)',
    },
    infoRow: {
        padding: 10,
        flexDirection: 'row',
    },
    left: {
        fontFamily: 'inter-700',
        fontSize: 12,
        flex: 1,
    },
    right: {
        fontFamily: 'inter-500',
        fontSize: 12,
        flex: 2,
    },
})
export default SeriesCard
