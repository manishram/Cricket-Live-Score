import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native'
import MatchCard from '../components/MatchCard'
import RequestApi from '../api/RequestApi'

const Recent = ({ navigation, startDate, endDate }) => {
    const [results, setResults] = useState([])
    const recentMatch = async () => {
        try {
            const response = await RequestApi.get('matches/', {
                params: {
                    // date: `${startDate}_${endDate}`,
                    paged: 1,
                    per_page: 100,
                },
            })
            setResults(response.data.response.items)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        recentMatch()
    }, [])
    const [isFetching, setIsFetching] = useState(false)
    async function onRefresh() {
        setIsFetching(true)
        await recentMatch()
        setIsFetching(false)
    }
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                onRefresh={() => onRefresh()}
                refreshing={isFetching}
                data={results}
                keyExtractor={(results) => results.match_id.toString()}
                renderItem={(items) => {
                    return (
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <MatchCard matchData={items.item} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
})

export default Recent
