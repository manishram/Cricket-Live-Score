import React, { Component, useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    RefreshControl,
    FlatList,
} from 'react-native'
import NewsCard from '../components/NewsCard'
import AppApi from '../api/AppApi'

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
}

const News = () => {
    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => setRefreshing(false))
    }, [])

    const [featuredNews, setFeaturedNews] = useState([])
    const getFeaturedNews = async () => {
        try {
            const response = await AppApi.get('/news', {
                params: {
                    featured: 'true',
                },
            })
            setFeaturedNews(response.data.response)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getFeaturedNews()
    }, [])

    const [notFeaturedNews, setNotFeatured] = useState([])
    const getNotFeaturedNews = async () => {
        try {
            const response = await AppApi.get('/news', {
                params: {
                    featured: 'false',
                },
            })
            setNotFeatured(response.data.response)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getNotFeaturedNews()
    }, [])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={styles.container}>
                <FlatList
                    data={featuredNews}
                    keyExtractor={(news) => news.id.toString()}
                    renderItem={(items) => {
                        return <NewsCard newsData={items.item} />
                    }}
                />
                <FlatList
                    data={notFeaturedNews}
                    keyExtractor={(news) => news.id.toString()}
                    renderItem={(items) => {
                        return <NewsCard newsData={items.item} />
                    }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
})

export default News
