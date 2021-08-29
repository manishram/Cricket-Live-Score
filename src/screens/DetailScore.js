import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native'
import MatchCard from '../components/MatchCard'
import DetailMatchTopNav from '../components/DetailMatchTopNav'

function DetailScore(props) {
    return <DetailMatchTopNav />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,240,240,1)',
        padding: 10,
    },
    rect: {
        width: '100%',
        height: 140,
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
    batsman: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
    },
    r5: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 78,
    },
    b2: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 24,
    },
    b3: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 30,
    },
    b4: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 28,
    },
    sr: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 27,
    },
    batsmanRow: {
        height: 17,
        flexDirection: 'row',
        marginTop: 6,
        marginLeft: 19,
        marginRight: 19,
    },
    rect2: {
        width: 346,
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 4,
    },
    batsman3: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    r6: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 80,
    },
    b7: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 24,
    },
    b6: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 30,
    },
    b5: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 28,
    },
    sr1: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 27,
    },
    batsman3Row: {
        height: 17,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 18,
        marginRight: 19,
    },
    batsman4: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    r7: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 80,
    },
    b8: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 24,
    },
    b9: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 30,
    },
    b10: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 28,
    },
    sr2: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 27,
    },
    batsman4Row: {
        height: 17,
        flexDirection: 'row',
        marginTop: 3,
        marginLeft: 18,
        marginRight: 19,
    },
    bowler: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
    },
    r8: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 92,
    },
    b13: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 24,
    },
    b12: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 30,
    },
    b11: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 28,
    },
    sr3: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 27,
    },
    bowlerRow: {
        height: 17,
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 18,
        marginRight: 19,
    },
    rect3: {
        width: 346,
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 4,
    },
    batsman5: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    r9: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 80,
    },
    b14: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 24,
    },
    b15: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 30,
    },
    b16: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 28,
    },
    sr4: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 27,
    },
    batsman5Row: {
        height: 17,
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: 18,
        marginRight: 19,
    },
})

export default DetailScore
