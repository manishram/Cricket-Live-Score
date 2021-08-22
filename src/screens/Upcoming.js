import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import MatchCard from '../components/MatchCard'

const Upcoming = ({ navigation }) => {
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

export default Upcoming
