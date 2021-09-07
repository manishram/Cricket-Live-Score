import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import RequestApi from '../api/RequestApi'
import MatchCard from '../components/MatchCard'
const Fixtures = () => {
    let cid = 118273
    let ipldate = 1632050000
    const [fixture, setFixture] = useState([])
    const getFixture = async () => {
        try {
            const response = await RequestApi.get(
                `competitions/${cid}/matches/`,
                {
                    params: {
                        per_page: 50,
                        paged: 1,
                    },
                }
            )
            setFixture(response.data.response.items)
            console.log(results)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getFixture()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontFamily: 'inter-700',
                    marginTop: 10,
                }}
            >
                IPL 2021 Fixture
            </Text>
            <FlatList
                style={{ marginTop: 10 }}
                showsVerticalScrollIndicator={false}
                data={fixture.sort(function (a, b) {
                    return a.timestamp_start - b.timestamp_start
                })}
                keyExtractor={(fixture) => fixture.match_id.toString()}
                renderItem={(items) => {
                    return ipldate < items.item.timestamp_start ? (
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <MatchCard matchData={items.item} />
                        </View>
                    ) : null
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

export default Fixtures
