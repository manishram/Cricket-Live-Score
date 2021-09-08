import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native'
import MatchCard from '../components/MatchCard'
import RequestApi from '../api/RequestApi'
import SeriesCard from '../components/SeriesCard'
import BannerAd from '../components/BannerAd'

const Series = ({ navigation }) => {
    const [results, setResults] = useState([])
    const series = async () => {
        try {
            const response = await RequestApi.get('competitions/', {
                params: {
                    paged: 57,
                    per_page: 10,
                },
            })
            setResults(response.data.response.items)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        series()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FlatList
                        inverted={true}
                        data={results}
                        keyExtractor={(results) => results.cid.toString()}
                        renderItem={(items) => {
                            return <SeriesCard seriesData={items.item} />
                        }}
                    />
                </View>
            </ScrollView>
            <BannerAd style={styles.bannerAd} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
    bannerAd: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
})

export default Series
