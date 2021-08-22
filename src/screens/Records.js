import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
const Records = () => {
    return (
        <View style={styles.OuterContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.rectStack}>
                        <View style={styles.rect}>
                            <View style={styles.steveSmithRow}>
                                <Text style={styles.steveSmith}>
                                    Records of 2021
                                </Text>
                            </View>
                            <View style={styles.divider}></View>
                            <View style={styles.basePriceRowColumnRow}>
                                <View style={styles.basePriceRowColumn}>
                                    <View style={styles.basePriceRow}>
                                        <Text style={styles.basePrice}>
                                            Most Run:
                                        </Text>
                                        <Text style={styles.basePrice1}>
                                            2 CR
                                        </Text>
                                    </View>
                                    <View style={styles.basePriceRow}>
                                        <Text style={styles.basePrice}>
                                            Most Sixes:
                                        </Text>
                                        <Text style={styles.basePrice1}>0</Text>
                                    </View>

                                    <View style={styles.basePriceRow}>
                                        <Text style={styles.basePrice}>
                                            Most Wickets:
                                        </Text>
                                        <Text style={styles.basePrice1}>0</Text>
                                    </View>
                                    <View style={styles.basePriceRow}>
                                        <Text style={styles.basePrice}>
                                            Highest Scores:
                                        </Text>
                                        <Text style={styles.basePrice1}>0</Text>
                                    </View>

                                    <View style={styles.basePriceRow}>
                                        <Text style={styles.basePrice}>
                                            Best Batting Strike Rate:
                                        </Text>
                                        <Text style={styles.basePrice1}>0</Text>
                                    </View>

                                    <View style={styles.basePriceRow}>
                                        <Text style={styles.basePrice}>
                                            Most Fifties:
                                        </Text>
                                        <Text style={styles.basePrice1}>0</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rect1}></View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    OuterContainer: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
    container: { marginBottom: 10 },
    rect: {
        top: 0,
        width: '100%',
        height: 200,
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
        width: 200,
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
        marginTop: 10,
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
        height: 180,
        marginBottom: 10,
    },
})

export default Records
