import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import MatchCard from '../components/MatchCard'
import NavigationBtn from '../components/NavigationBtn'
import NewsCard from '../components/NewsCard'

function Home(props) {
    return (
        <View style={styles.container}>
            <MatchCard style={styles.matchCard}></MatchCard>
            <View style={styles.navContainer}>
                <NavigationBtn
                    icon="chart-bar"
                    style={styles.navigationBtn}
                    title="Points Table"
                ></NavigationBtn>
                <NavigationBtn
                    icon="format-list-checkbox"
                    style={styles.navigationBtn}
                    title="Fixtures"
                ></NavigationBtn>
                <NavigationBtn
                    icon="gavel"
                    style={styles.navigationBtn}
                    title="Auction"
                ></NavigationBtn>
                <NavigationBtn
                    icon="trophy"
                    style={styles.navigationBtn}
                    title="Records"
                ></NavigationBtn>
                <NavigationBtn
                    icon="google-maps"
                    style={styles.navigationBtn}
                    title="Venues"
                ></NavigationBtn>
            </View>
            <View style={styles.news3Row}>
                <Text style={styles.news3}>NEWS</Text>
                <View style={styles.news3Filler}></View>
                <View style={styles.group}>
                    <TouchableOpacity>
                        <View style={styles.viewAllLabel}>
                            <Text style={styles.viewAll}>View All</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <NewsCard isFeatured={1} />
            <NewsCard isFeatured={0} />
            <NewsCard isFeatured={0} />
            <NewsCard isFeatured={1} />
            <NewsCard isFeatured={0} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,240,240,1)',
        padding: 10,
    },
    matchCard: {
        height: 140,
        width: '100%',
        backgroundColor: '#fff',
        margin: 15,
    },
    navigationBtn: {
        height: 45,
        width: '100%',
        backgroundColor: 'rgba(249,249,249,1)',
        margin: 5,
    },

    navContainer: { width: '100%', marginTop: 25 },
    news3: {
        fontFamily: 'roboto-700',
        color: '#121212',
        height: 15,
        width: 39,
        fontSize: 12,
    },
    news3Filler: {
        flex: 1,
        flexDirection: 'row',
    },
    group: {
        width: 40,
        height: 24,
    },
    viewAll: {
        fontFamily: 'roboto-700',
        color: 'rgba(0,27,121,1)',
        height: 13,
        fontSize: 12,
        textAlign: 'center',
    },
    viewAllLabel: {
        height: 18,
        width: 55,
        borderRadius: 10,
        backgroundColor: '#c3deff8c',
    },
    icon2: {
        color: 'rgba(0,27,121,1)',
        fontSize: 20,
    },
    news3Row: {
        height: 24,
        flexDirection: 'row',
        marginTop: 21,
        marginLeft: 15,
        marginRight: 15,
    },
    newsCard: {
        width: '100%',
        height: 135,
        marginTop: 8,
    },
    newsBody: {
        width: '100%',
        height: 125,
    },
    rect2: {
        width: '100%',
        height: 125,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 12,
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    image: {
        width: 166,
        height: 102,
        marginTop: 2,
    },
    loremIpsum: {
        fontFamily: 'inter-600',
        color: 'rgba(0,27,121,1)',
        fontSize: 10,
    },
    text: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        fontSize: 10,
    },
    text1: {
        fontFamily: 'roboto-regular',
        color: 'rgba(74,74,74,1)',
        fontSize: 8,
    },
    textStack: {
        width: 170,
        height: 80,
        marginTop: 6,
    },
    loremIpsumColumn: {
        width: 170,
        marginLeft: 7,
    },
    imageRow: {
        height: 110,
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 3,
    },
    featuredLabel: {
        left: 289,
        width: 50,
        height: 15,
    },
    rect3: {
        width: 50,
        height: 15,
        backgroundColor: 'rgba(214,167,0,1)',
        borderRadius: 10,
    },
    featured: {
        fontFamily: 'inter-600',
        color: 'rgba(255,255,255,1)',
        fontSize: 8,
        marginTop: 2,
        marginLeft: 8,
    },
})

export default Home
