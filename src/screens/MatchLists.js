import React, { Component, useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    FlatList,
    ActivityIndicator,
} from 'react-native'
import MatchCard from '../components/MatchCard'
import RequestApi from '../api/RequestApi'
import BannerAd from '../components/BannerAd'

const Recent = ({ navigation, startDate, endDate }) => {
    const [results, setResults] = useState([])
    const [isLoadingMatches, setisLoadingMatches] = useState()
    const getMatchList = async () => {
        setisLoadingMatches(true)
        try {
            const response = await RequestApi.get('matches/', {
                params: {
                    date: `${startDate}_${endDate}`,
                },
            })
            setResults(response.data.response.items)
            setisLoadingMatches(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getMatchList()
    }, [])
    const [isFetching, setIsFetching] = useState(false)
    async function onRefresh() {
        setIsFetching(true)
        await getMatchList()
        setIsFetching(false)
    }
    return results.length === 0 ? (
        <Text style={{ textAlign: 'center' }}>No Matches</Text>
    ) : (
        <View style={styles.container}>
            {isLoadingMatches ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        padding: 10,
                        height: 400,
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    />
                </View>
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    onRefresh={() => onRefresh()}
                    refreshing={isFetching}
                    data={results.sort(function (a, b) {
                        return a.timestamp_start - b.timestamp_start
                    })}
                    keyExtractor={(results) => results.match_id.toString()}
                    renderItem={(items) => {
                        return (
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <MatchCard matchData={items.item} />
                            </View>
                        )
                    }}
                />
            )}
            <BannerAd style={styles.bannerAd} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
    bannerAd: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
})

export default Recent
