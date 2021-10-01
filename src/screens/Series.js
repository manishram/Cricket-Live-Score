import React, { Component, useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    FlatList,
    ActivityIndicator,
    BackHandler,
} from 'react-native'
import MatchCard from '../components/MatchCard'
import RequestApi from '../api/RequestApi'
import SeriesCard from '../components/SeriesCard'
import BannerAd from '../components/BannerAd'
import InterstitialAd from '../components/InterstitialAd'

const Series = ({ navigation }) => {
    const [results, setResults] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [isLoadingSeries, setisLoadingSeries] = useState()
    const perPageSeries = 20
    const series = async () => {
        setisLoadingSeries(true)

        try {
            const response = await RequestApi.get('competitions/', {
                params: {
                    paged: 1,
                    per_page: 1,
                },
            })
            setTotalItems(response.data.response.total_items)
        } catch (err) {
            console.log(err)
        }

        try {
            const response = await RequestApi.get('competitions/', {
                params: {
                    paged: Math.ceil(totalItems / perPageSeries),
                    per_page: perPageSeries,
                },
            })
            setResults(response.data.response.items)
            setisLoadingSeries(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        series()
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
        <View style={{ flex: 1 }}>
            <InterstitialAd />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {isLoadingSeries ? (
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
                            inverted={true}
                            data={results}
                            keyExtractor={(results) => results.cid.toString()}
                            renderItem={(items) => {
                                return <SeriesCard seriesData={items.item} />
                            }}
                        />
                    )}
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
