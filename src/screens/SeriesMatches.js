import React, { useEffect, useState } from 'react'
import { View, ScrollView, FlatList, StyleSheet, Text } from 'react-native'
import RequestApi from '../api/RequestApi'
import MatchCard from '../components/MatchCard'

function SeriesMatches(props) {
    let cid = props.route.params.cid
    let seriesName = props.route.params.seriesName
    let totalMatches = props.route.params.totalMatches
    console.log(props.routes)
    const [results, setResults] = useState([])
    const seriesMatch = async () => {
        try {
            const response = await RequestApi.get(
                `competitions/${cid}/matches`,
                {
                    params: {
                        paged: 1,
                        per_page: totalMatches,
                    },
                }
            )
            setResults(response.data.response.items)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        seriesMatch()
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.seriesName}>{seriesName}</Text>
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
    },
    seriesName: {
        fontFamily: 'inter-700',
        alignSelf: 'center',
    },
})
export default SeriesMatches
