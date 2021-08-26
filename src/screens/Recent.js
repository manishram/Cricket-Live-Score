import React, { Component, useState } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import MatchCard from '../components/MatchCard'
import RequestApi from '../api/RequestApi'

const Recent = ({ navigation }) => {
    const [results, setResults] = useState([])
    const recentMatch = async () => {
        try {
            const response = await RequestApi.get('matches/', {
                params: {
                    status: 2,
                    format: 4,
                    token: 'ec471071441bb2ac538a0ff901abd249',
                },
            })
            setResults(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <MatchCard navigation={navigation}></MatchCard>
                <MatchCard navigation={navigation}></MatchCard>
                <MatchCard navigation={navigation}></MatchCard>
                <MatchCard navigation={navigation}></MatchCard>
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
