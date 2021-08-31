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
                    date: `${startDate}_${endDate}`,
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

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <FlatList
                    data={results}
                    keyExtractor={(results) => results.match_id.toString()}
                    renderItem={(items) => {
                        return <MatchCard matchData={items.item} />
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

export default Recent
