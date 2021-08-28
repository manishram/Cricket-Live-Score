import React, { Component, useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Switch } from 'react-native'
import AuctionPlayerCard from '../components/AuctionPlayerCard'
const Auction = () => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Text>Unsold</Text>
                    <Switch
                        style={{ marginTop: -5 }}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text>Sold</Text>
                </View>
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
