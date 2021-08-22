import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import FixtureMatchCard from '../components/FixtureMatchCard'
const Fixtures = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <FixtureMatchCard />
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

export default Fixtures
