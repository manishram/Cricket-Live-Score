import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import NewsCard from '../components/NewsCard'
const News = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
