import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Text, Image } from 'react-native'
import MatchCard from '../components/MatchCard'
import NavigationBtn from '../components/NavigationBtn'
import Icon from 'react-native-vector-icons/Feather'

function Home(props) {
    return (
        <View style={styles.container}>
            <MatchCard style={styles.matchCard}></MatchCard>
            <NavigationBtn style={styles.navigationBtn}></NavigationBtn>
            <NavigationBtn style={styles.navigationBtn1}></NavigationBtn>
            <NavigationBtn style={styles.navigationBtn2}></NavigationBtn>
            <NavigationBtn style={styles.navigationBtn3}></NavigationBtn>
            <NavigationBtn style={styles.navigationBtn4}></NavigationBtn>
            <View style={styles.news3Row}>
                <Text style={styles.news3}>NEWS</Text>
                <View style={styles.news3Filler}></View>
                <View style={styles.group}>
                    <View style={styles.viewAllStack}>
                        <Text style={styles.viewAll}>View All</Text>
                        <Icon name="arrow-right" style={styles.icon2}></Icon>
                    </View>
                </View>
            </View>
            <View style={styles.newsCard}>
                <View style={styles.newsBodyStack}>
                    <View style={styles.newsBody}>
                        <View style={styles.rect2}>
                            <View style={styles.imageRow}>
                                <Image
                                    source={require('../assets/images/cardImage2.png')}
                                    resizeMode="contain"
                                    style={styles.image}
                                ></Image>
                                <View style={styles.loremIpsumColumn}>
                                    <Text style={styles.loremIpsum}>
                                        IPL 2021: 5 Players who can replace
                                        Washington Sundar at RCB
                                    </Text>
                                    <View style={styles.textStack}>
                                        <Text style={styles.text}>
                                            5 Players who can replace Pat
                                            Cummins in the UAE leg Not only has
                                            Pat Cummins been sensational for
                                            Australia but he has also been
                                            superb for KKR in the Indian Premier
                                            League (IPL).
                                        </Text>
                                        <Text style={styles.text1}>
                                            6 hours ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.featuredLabel}>
                        <View style={styles.rect3}>
                            <Text style={styles.featured}>Featured</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,240,240,1)',
    },
    rect4: {
        top: 117,
        left: 143,
        width: 89,
        height: 3,
        position: 'absolute',
        backgroundColor: 'rgba(219,0,0,1)',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    matchCard: {
        height: 140,
        width: '100%',
        backgroundColor: '#fff',
        margin: 15,
    },
    navigationBtn: {
        height: 45,
        width: 346,
        backgroundColor: 'rgba(249,249,249,1)',
        marginTop: 20,
        marginLeft: 15,
    },
    navigationBtn1: {
        height: 45,
        width: 346,
        marginTop: 10,
        marginLeft: 15,
    },
    navigationBtn2: {
        height: 45,
        width: 346,
        marginTop: 10,
        marginLeft: 15,
    },
    navigationBtn3: {
        height: 45,
        width: 346,
        marginTop: 10,
        marginLeft: 15,
    },
    navigationBtn4: {
        height: 45,
        width: 346,
        marginTop: 10,
        marginLeft: 15,
    },
    news3: {
        fontFamily: 'roboto-700',
        color: '#121212',
        height: 15,
        width: 39,
        fontSize: 12,
        marginTop: 4,
    },
    news3Filler: {
        flex: 1,
        flexDirection: 'row',
    },
    group: {
        width: 67,
        height: 24,
    },
    viewAll: {
        top: 3,
        left: 0,
        position: 'absolute',
        fontFamily: 'roboto-700',
        color: 'rgba(0,27,121,1)',
        height: 13,
        width: 51,
        fontSize: 12,
        textAlign: 'center',
    },
    icon2: {
        top: 0,
        left: 48,
        position: 'absolute',
        color: 'rgba(0,27,121,1)',
        fontSize: 20,
    },
    viewAllStack: {
        width: 68,
        height: 20,
        marginTop: 3,
        marginLeft: -12,
    },
    news3Row: {
        height: 24,
        flexDirection: 'row',
        marginTop: 21,
        marginLeft: 15,
        marginRight: 15,
    },
    newsCard: {
        width: 346,
        height: 135,
        marginTop: 8,
        marginLeft: 15,
    },
    newsBody: {
        top: 7,
        left: 0,
        width: 346,
        height: 125,
        position: 'absolute',
    },
    rect2: {
        width: 346,
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
        top: 0,
        left: 0,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        fontSize: 10,
    },
    text1: {
        top: 70,
        left: 112,
        position: 'absolute',
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
        top: 0,
        left: 289,
        width: 50,
        height: 15,
        position: 'absolute',
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
    newsBodyStack: {
        width: 346,
        height: 132,
        marginTop: -1,
    },
})

export default Home
