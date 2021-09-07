import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native'
import MatchCard from '../components/MatchCard'
import RequestApi from '../api/RequestApi'
import SeriesCard from '../components/SeriesCard'

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
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
})

export default Series
