import React, { Component, useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    Dimensions,
    ActivityIndicator,
} from 'react-native'
import NewsCard from '../components/NewsCard'
import AppApi from '../api/AppApi'
import BannerAd from '../components/BannerAd'

const News = (props) => {
    let i = 0
    let newsArrayNotFeatured = []
    let newsArrayFeatured = []

    const [NewsData, setNews] = useState([])
    const [isNewsLoading, setIsNewsLoading] = useState()

    const getNotFeaturedNews = async () => {
        i = 0
        try {
            const response = await AppApi.get('/news/', {
                params: {
                    featured: 'false',
                },
            })
            while (i < response.data.response.length) {
                newsArrayNotFeatured.push(response.data.response[i])
                i = i + 1
            }
            i = 0
        } catch (err) {
            console.log(err)
        }
    }

    const getFeaturedNews = async () => {
        i = 0
        try {
            const response = await AppApi.get('/news/', {
                params: {
                    featured: 'true',
                },
            })

            while (i < response.data.response.length) {
                newsArrayFeatured.push(response.data.response[i])
                i = i + 1
            }
            i = 0
        } catch (err) {
            console.log(err)
        }
    }
    async function processNews() {
        setIsNewsLoading(true)
        await getNotFeaturedNews()
        await getFeaturedNews()
        await setNews(newsArrayNotFeatured.concat(newsArrayFeatured).reverse())
        setIsNewsLoading(false)
    }
    useEffect(() => {
        processNews()
        return () => {}
    }, [])

    const [isFetching, setIsFetching] = useState(false)
    async function onRefresh() {
        setIsFetching(true)
        await getNotFeaturedNews()
        await getFeaturedNews()
        await setNews(
            newsArrayNotFeatured
                .concat(newsArrayFeatured)
                .reverse()
                .slice(0, 10)
        )
        setIsFetching(false)
        return () => {}
    }

    const renderFooter = () => {
        if (isFetching) {
            return <ActivityIndicator size="large" />
        } else {
            return null
        }
    }
    let pagination = 1
    fetchMore = () => {
        setNews(NewsData.slice(0, 10 * pagination))
        pagination = pagination + 1
    }

    const windowHeight = Dimensions.get('window').height
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container]}>
                <View>
                    {isNewsLoading ? (
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
                        <View>
                            <FlatList
                                showsVerticalScrollIndicator={true}
                                onEndThreshold={0}
                                onEndReachedThreshold={0.1}
                                initialNumToRender={5}
                                windowSize={1}
                                onRefresh={() => onRefresh()}
                                ListFooterComponent={renderFooter}
                                onEndReached={fetchMore}
                                refreshing={isFetching}
                                extraData={isFetching}
                                data={NewsData}
                                keyExtractor={(NewsData) => NewsData.id}
                                renderItem={(items) => {
                                    if (i === 2) {
                                        i = 0
                                        return (
                                            <View>
                                                <View
                                                    style={{
                                                        backgroundColor:
                                                            '#f6f6f6',
                                                        marginTop: 10,
                                                    }}
                                                >
                                                    <BannerAd />
                                                </View>
                                                <NewsCard
                                                    newsData={items.item}
                                                />
                                            </View>
                                        )
                                    } else {
                                        i = i + 1
                                        return (
                                            <NewsCard newsData={items.item} />
                                        )
                                    }
                                }}
                            />
                        </View>
                    )}
                </View>
            </View>
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
        marginTop: 10,
    },
})

export default News
