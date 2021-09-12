import React, { Component, useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    FlatList,
    BackHandler,
} from 'react-native'
import AppApi from '../api/AppApi'
import InterstitialAd from '../components/InterstitialAd'

const Winners = () => {
    const [winnerList, setwinnerList] = useState([])
    const getWinners = async () => {
        try {
            const response = await AppApi.get('/winners/')
            setwinnerList(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getWinners()
        return () => {}
    }, [])

    const backAction = () => {
        window.InterstitialAdComponent.showAd()
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction)

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction)
    }, [])

    return (
        <View style={styles.container}>
            <InterstitialAd />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                    style={{
                        fontFamily: 'inter-700',
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                >
                    Winners
                </Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={winnerList}
                    keyExtractor={(winnerList) => winnerList.year.toString()}
                    renderItem={(items) => {
                        console.log(
                            `${AppApi.defaults.baseURL}/winners/images/${items.item.image}`
                        )
                        return (
                            <View style={styles.card}>
                                <Text
                                    style={{
                                        fontFamily: 'inter-600',
                                        textAlign: 'center',
                                        marginBottom: 10,
                                        fontSize: 24,
                                    }}
                                >
                                    {items.item.year}
                                </Text>
                                <Image
                                    source={{
                                        uri: `${AppApi.defaults.baseURL}/winners/images/${items.item.image}`,
                                    }}
                                    style={styles.image}
                                ></Image>

                                <Text
                                    style={{
                                        fontFamily: 'inter-500',
                                        textAlign: 'center',
                                    }}
                                >
                                    {items.item.text}
                                </Text>
                                <View style={styles.divider}></View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.leftText}>
                                        Winner Team
                                    </Text>
                                    <Text style={styles.rightText}>
                                        {items.item.winner_team}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.leftText}>
                                        Runner-up Team
                                    </Text>
                                    <Text style={styles.rightText}>
                                        {items.item.runner_team}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.leftText}>
                                        Orange Cap
                                    </Text>
                                    <Text style={styles.rightText}>
                                        {items.item.orange_cap}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.leftText}>
                                        Purple Cap
                                    </Text>
                                    <Text style={styles.rightText}>
                                        {items.item.purple_cap}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.leftText}>
                                        Man of the Match
                                    </Text>
                                    <Text style={styles.rightText}>
                                        {items.item.m_of_m}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.leftText}>Venue</Text>
                                    <Text style={styles.rightText}>
                                        {items.item.venue}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.leftText}>
                                        Match Date
                                    </Text>
                                    <Text style={styles.rightText}>
                                        {items.item.match_date}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.leftText}>
                                        Player of the Tournament
                                    </Text>
                                    <Text style={styles.rightText}>
                                        {items.item.player_tournament}
                                    </Text>
                                </View>
                                <View style={styles.divider}></View>
                                <Text style={{ fontFamily: 'inter-500' }}>
                                    {items.item.description}
                                </Text>
                            </View>
                        )
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
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
        marginTop: 10,
        padding: 10,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        height: 200,
    },
    tableRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    leftText: {
        flex: 1,
        fontFamily: 'inter-600',
    },
    rightText: { flex: 1 },
})

export default Winners
