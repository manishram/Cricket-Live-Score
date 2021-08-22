import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

function FixtureMatchCard(props) {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.rect}>
                <Text style={styles.match1}>MATCH 1</Text>
                <View style={styles.divider}></View>
                <View style={styles.image1Row}>
                    <Image
                        source={require('../assets/images/image_iaYu..png')}
                        resizeMode="contain"
                        style={styles.image1}
                    ></Image>
                    <Text style={styles.csk1}>CSK</Text>
                    <Text style={styles.date}>Date:</Text>
                    <Text style={styles.wed20Sept2021}>Wed 20 Sept, 2021</Text>
                </View>
                <View style={styles.vsRow}>
                    <Text style={styles.vs}>VS</Text>
                    <Text style={styles.time}>Time:</Text>
                    <Text style={styles.wed20Sept20212}>15:30 (20:00 IST)</Text>
                </View>
                <View style={styles.image2Row}>
                    <Image
                        source={require('../assets/images/image_iaYu..png')}
                        resizeMode="contain"
                        style={styles.image2}
                    ></Image>
                    <Text style={styles.csk2}>CSK</Text>
                    <Text style={styles.venue}>Venue:</Text>
                    <Text style={styles.rajivGandhiIntl} numberOfLines={2}>
                        Rajiv Gandhi Intl. Cricket Stadium, Hyderabad
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    rect: {
        width: '100%',
        height: 141,
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
    match1: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 10,
        marginTop: 10,
        marginLeft: 11,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 10,
    },
    image1: {
        height: 32,
        width: 32,
    },
    csk1: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 15,
        marginTop: 9,
    },
    date: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        fontSize: 10,
        marginLeft: 60,
        marginTop: 11,
    },
    wed20Sept2021: {
        fontFamily: 'roboto-regular',
        color: 'rgba(74,74,74,1)',
        fontSize: 10,
        marginLeft: 12,
        marginTop: 11,
    },
    image1Row: {
        height: 32,
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 24,
        marginRight: 42,
    },
    vs: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 10,
        marginTop: 3,
    },
    time: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        fontSize: 10,
        marginLeft: 84,
    },
    wed20Sept20212: {
        fontFamily: 'roboto-regular',
        color: 'rgba(74,74,74,1)',
        fontSize: 10,
        marginLeft: 12,
    },
    vsRow: {
        height: 15,
        flexDirection: 'row',
        marginTop: 4,
        marginLeft: 58,
        marginRight: 44,
    },
    image2: {
        height: 32,
        width: 32,
        marginTop: 3,
    },
    csk2: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 15,
        marginTop: 12,
    },
    venue: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        fontSize: 10,
        marginLeft: 60,
    },
    rajivGandhiIntl: {
        fontFamily: 'roboto-regular',
        color: 'rgba(74,74,74,1)',
        fontSize: 10,
        marginLeft: 4,
        width: 140,
    },
    image2Row: {
        height: 35,
        flexDirection: 'row',
        marginTop: 4,
        marginLeft: 24,
        marginRight: 42,
    },
})

export default FixtureMatchCard
