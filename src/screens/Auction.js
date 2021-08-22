import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import AuctionPlayerCard from '../components/AuctionPlayerCard'
const Auction = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.role}>Batsmen</Text>
                <AuctionPlayerCard />
                <AuctionPlayerCard />
                <Text style={styles.role}>Bowlers</Text>
                <AuctionPlayerCard />
                <AuctionPlayerCard />
                <Text style={styles.role}>All Rounders</Text>
                <AuctionPlayerCard />
                <AuctionPlayerCard />
                <Text style={styles.role}>Wicketkeeprs</Text>
                <AuctionPlayerCard />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
    role: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 14,
        marginBottom: 3,
        marginTop: 8,
        marginLeft: 10,
    },
})

export default Auction
