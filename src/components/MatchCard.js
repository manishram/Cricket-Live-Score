import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

function MatchCard(props) {
    const navigation = useNavigation()

    let teama_name = props.matchData.teama.name
    let teamb_name = props.matchData.teamb.name
    let teama_logo = props.matchData.teama.logo_url
    let teamb_logo = props.matchData.teamb.logo_url
    let tournament_name = props.matchData.competition.title
    let matchStatus = props.matchData.status
    let liveMatchStatusCode = 3
    let statusNote = props.matchData.status_note
    let teamaScore = props.matchData.teama.scores_full
    let teambScore = props.matchData.teamb.scores_full

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('DetailMatchTopNav', {
                        matchData: props.matchData,
                    })
                }}
            >
                <View style={styles.matchNameRow}>
                    <Text style={styles.cskVsMi}>{tournament_name}</Text>
                    {matchStatus === liveMatchStatusCode ? (
                        <View style={styles.liveLabel}>
                            <Text style={styles.live}>Live</Text>
                        </View>
                    ) : null}
                    <Icon name="chevron-right" style={styles.icon}></Icon>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.imageRow}>
                    <Image
                        source={{ uri: teama_logo }}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                    <Text style={styles.csk2}>{teama_name}</Text>
                    <Text style={styles.csk5}>{teamaScore}</Text>
                </View>
                <View style={styles.image1Row}>
                    <Image
                        source={{ uri: teamb_logo }}
                        resizeMode="contain"
                        style={styles.image1}
                    ></Image>
                    <Text style={styles.csk3}>{teamb_name}</Text>
                    <Text style={styles.csk6}>{teambScore}</Text>
                </View>
                <View style={styles.rect5}></View>
                <Text style={styles.text}>{statusNote}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 155,
        backgroundColor: 'rgba(249,249,249,1)',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom: 10,
    },
    cskVsMi: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginTop: 8,
    },
    liveLabel: {
        width: 30,
        height: 15,
        backgroundColor: 'rgba(219,0,0,1)',
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 8,
    },
    live: {
        textAlign: 'center',
        fontFamily: 'inter-700',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    icon: {
        color: 'rgba(0,27,121,1)',
        fontSize: 20,
        height: 22,
        width: 20,
        marginTop: 5,
        right: 0,
        position: 'absolute',
    },
    matchNameRow: {
        height: 30,
        flexDirection: 'row',
        marginTop: 4,
        marginLeft: 22,
        marginRight: 8,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 3,
    },
    image: {
        height: 32,
        width: 32,
    },
    csk2: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 15,
        marginTop: 9,
    },
    csk5: {
        fontFamily: 'inter-500',
        color: 'rgba(99,99,99,1)',
        fontSize: 12,
        marginLeft: 130,
        marginTop: 9,
    },
    imageRow: {
        height: 32,
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 22,
        marginRight: 28,
    },
    image1: {
        height: 32,
        width: 32,
    },
    csk3: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        marginLeft: 15,
        marginTop: 9,
    },
    csk6: {
        fontFamily: 'inter-500',
        color: 'rgba(99,99,99,1)',
        fontSize: 12,
        marginLeft: 135,
        marginTop: 8,
    },
    image1Row: {
        height: 32,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 22,
        marginRight: 28,
    },
    rect5: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 8,
    },
    text: {
        fontFamily: 'inter-regular',
        color: 'rgba(99,99,99,1)',
        fontSize: 10,
        marginTop: 3,
        alignSelf: 'center',
    },
})

export default MatchCard
