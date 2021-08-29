import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, FlatList } from 'react-native'
import MatchCard from '../components/MatchCard'
import RequestApi from '../api/RequestApi'

const Upcoming = () => {
    const [results, setResults] = useState([])
    const upcomingMatch = async () => {
        try {
            const response = await RequestApi.get('matches/', {
                params: {
                    status: 2,
                    format: 3,
                    paged: 1,
                    per_page: 10,
                },
            })
            setResults(response.data.response.items)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        upcomingMatch()
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

export default Upcoming
