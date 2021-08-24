import React, { Component, useState } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    RefreshControl,
} from 'react-native'
import NewsCard from '../components/NewsCard'

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
}

const News = () => {
    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => setRefreshing(false))
    }, [])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={styles.container}>
                <NewsCard isFeatured={1} />
                <NewsCard isFeatured={1} />
                <NewsCard isFeatured={0} />
                <NewsCard isFeatured={0} />
                <NewsCard isFeatured={0} />
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
