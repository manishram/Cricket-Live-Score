import React, { useEffect, useState } from 'react'
import {
    View,
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    ActivityIndicator,
} from 'react-native'
import RequestApi from '../api/RequestApi'
import MatchCard from '../components/MatchCard'

function SeriesMatches(props) {
    let cid = props.route.params.cid
    let seriesName = props.route.params.seriesName
    let totalMatches = props.route.params.totalMatches
    console.log(props.routes)
    const [results, setResults] = useState([])
    const [isLoadingMatches, setisLoadingMatches] = useState()
    const seriesMatch = async () => {
        setisLoadingMatches(true)
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
            setisLoadingMatches(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        seriesMatch()
        return () => {}
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.seriesName}>{seriesName}</Text>
                {isLoadingMatches ? (
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
                    <FlatList
                        inverted={true}
                        data={results.sort(function (a, b) {
                            return a.timestamp_start - b.timestamp_start
                        })}
                        keyExtractor={(results) => results.match_id.toString()}
                        renderItem={(items) => {
                            return <MatchCard matchData={items.item} />
                        }}
                    />
                )}
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
