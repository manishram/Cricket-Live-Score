import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

function AuctionPlayerCard(props) {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.rectStack}>
                <View style={styles.rect}>
                    <View style={styles.steveSmithRow}>
                        <Text style={styles.steveSmith}>Steve Smith</Text>
                        <Text style={styles.delhiCapitals}>Delhi Capitals</Text>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={styles.basePriceRowColumnRow}>
                        <View style={styles.basePriceRowColumn}>
                            <View style={styles.basePriceRow}>
                                <Text style={styles.basePrice}>
                                    Base Price:
                                </Text>
                                <Text style={styles.basePrice1}>2 CR</Text>
                            </View>
                            <View style={styles.sellingPriceRow}>
                                <Text style={styles.sellingPrice}>
                                    Selling Price:
                                </Text>
                                <Text style={styles.basePrice2}>2.2 CR</Text>
                            </View>
                        </View>
                        <Image
                            source={require('../assets/images/image_iaYu..png')}
                            resizeMode="contain"
                            style={styles.image1}
                        ></Image>
                    </View>
                </View>
                <View style={styles.rect1}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginBottom: 10 },
    rect: {
        top: 0,
        width: '100%',
        height: 120,
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
        marginTop: 8,
        marginBottom: 2,
    },
    image1: {
        height: 60,
        width: 60,
        marginLeft: 117,
    },
    basePriceRowColumnRow: {
        height: 60,
        flexDirection: 'row',
        marginTop: 17,
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
        height: 107,
        marginBottom: 10,
    },
})

export default AuctionPlayerCard
