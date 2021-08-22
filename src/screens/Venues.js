import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import VenueCard from '../components/VenueCard'

const Venues = () => {
    return (
        <View style={styles.containerOuter}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerOuter: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
    container: { marginBottom: 10 },
    rect: {
        top: 0,
        width: '100%',
        height: 150,
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 4,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    steveSmith: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
    },
    delhiCapitals: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 150,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 10,
    },
    steveSmithRow: {
        height: 15,
        flexDirection: 'row',
        marginTop: 7,
        marginLeft: 16,
        marginRight: 21,
    },
    basePrice: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
    },
    basePrice1: {
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 12,
        marginLeft: 5,
    },
    basePriceRow: {
        height: 15,
        flexDirection: 'row',
        marginRight: 21,
    },
    sellingPrice: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
    },
    basePrice2: {
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 12,
        marginLeft: 4,
    },
    sellingPriceRow: {
        height: 15,
        flexDirection: 'row',
        marginTop: 20,
    },
    basePriceRowColumn: {
        width: 118,
        marginBottom: 2,
    },
    image1: {
        height: 60,
        width: 60,
        marginLeft: 117,
        marginTop: 20,
    },
    basePriceRowColumnRow: {
        height: 60,
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 27,
    },
    rect1: {
        top: 29,
        left: 0,
        width: 338,
        height: 1,
        position: 'absolute',
        backgroundColor: '#E6E6E6',
    },
    rectStack: {
        width: '100%',
        height: 140,
        marginBottom: 10,
    },
})

export default Venues
