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
    const [featuredNews, setFeaturedNews] = useState([])
    const getFeaturedNews = async () => {
        try {
            const response = await AppApi.get('/news/', {
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
            const response = await AppApi.get('/news/', {
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
    const [isFetching, setIsFetching] = useState(false)
    async function onRefresh() {
        setIsFetching(true)
        await getFeaturedNews()
        await getNotFeaturedNews()
        setIsFetching(false)
    }
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                onRefresh={() => onRefresh()}
                refreshing={isFetching}
                extraData={isFetching}
                inverted={true}
                data={featuredNews}
                keyExtractor={(news) => news.id.toString()}
                renderItem={(items) => {
                    return <NewsCard newsData={items.item} />
                }}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                onRefresh={() => onRefresh()}
                refreshing={isFetching}
                extraData={isFetching}
                inverted={true}
                data={notFeaturedNews}
                keyExtractor={(news) => news.id.toString()}
                renderItem={(items) => {
                    return <NewsCard newsData={items.item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
})

export default News
