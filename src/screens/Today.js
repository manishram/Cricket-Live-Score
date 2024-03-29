import React, { Component, useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    ImageBackground,
} from 'react-native'
import CountDown from 'react-native-countdown-component'
import MatchCard from '../components/MatchCard'
import NavigationBtn from '../components/NavigationBtn'
import { useNavigation } from '@react-navigation/native'
import RequestApi from '../api/RequestApi'
import AppApi from '../api/AppApi'
import News from '../screens/News'
// import MediationTestSuite from 'react-native-mediation-test-suite'

function Today(props) {
    let i
    const navigation = useNavigation()
    const specialTournamentCid = 118273

    const [specialLiveMatches, setspecialLiveMatches] = useState([])
    const [specialMatches, setspecialMatches] = useState([])

    const [generalLiveMatches, setGeneralLiveMatches] = useState([])
    const [generalMatches, setGeneralMatches] = useState([])

    const todayMatch = async () => {
        i = 0
        specialMatchArray = []
        generalMatchArray = []
        specialLiveMatchArray = []
        generalLiveMatchArray = []

        try {
            const response = await RequestApi.get('matches/', {
                params: {
                    date: `${props.startDate}_${props.endDate}`,
                },
            })

            while (i < response.data.response.items.length) {
                if (
                    response.data.response.items[i].competition.cid ===
                    specialTournamentCid
                ) {
                    if (response.data.response.items[i].status === 3) {
                        specialLiveMatchArray.push(
                            response.data.response.items[i]
                        )
                    } else {
                        specialMatchArray.push(response.data.response.items[i])
                    }
                } else {
                    if (response.data.response.items[i].status === 3) {
                        generalLiveMatchArray.push(
                            response.data.response.items[i]
                        )
                    } else {
                        generalMatchArray.push(response.data.response.items[i])
                    }
                }
                i = i + 1
            }

            setspecialLiveMatches(specialLiveMatchArray)
            setspecialMatches(specialMatchArray)
            setGeneralLiveMatches(generalLiveMatchArray)
            setGeneralMatches(generalMatchArray)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        todayMatch()
        return () => {}
    }, [])

    const [featuredNews, setFeaturedNews] = useState([])
    const getFeaturedNews = async () => {
        try {
            const response = await AppApi.get('/news', {
                params: {
                    featured: 'true',
                },
            })
            setFeaturedNews(response.data.response)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getFeaturedNews()
        return () => {}
    }, [])

    const [notFeaturedNews, setNotFeatured] = useState([])
    const getNotFeaturedNews = async () => {
        try {
            const response = await AppApi.get('/news', {
                params: {
                    featured: 'false',
                },
            })
            setNotFeatured(response.data.response)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getNotFeaturedNews()
        return () => {}
    }, [])

    const [isFetching, setIsFetching] = useState(false)
    async function onRefresh() {
        setIsFetching(true)
        await todayMatch()
        setIsFetching(false)
    }
    let ipldate = 1632060000000

    let now = new Date().getTime()
    let timeLeft = (ipldate - now) / 1000

    return (
        <View style={styles.container}>
            {timeLeft > 0 ? (
                <ImageBackground
                    source={{
                        uri: `${AppApi.defaults.baseURL}/images/ipl-poster.jpg`,
                    }}
                    style={{ left: 0, right: 0, height: 180 }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.45)',
                        }}
                    >
                        <CountDown
                            until={timeLeft}
                            size={20}
                            separatorStyle={{
                                color: '#1CC625',
                            }}
                            timeLabelStyle={{
                                color: 'orange',
                                fontFamily: 'inter-700',
                            }}
                            timeLabels={{
                                d: 'Days',
                                h: 'Hrs',
                                m: 'Min',
                                s: 'Sec',
                            }}
                        />
                    </View>
                </ImageBackground>
            ) : null}
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={specialLiveMatches.sort(function (a, b) {
                        return a.timestamp_start - b.timestamp_start
                    })}
                    keyExtractor={(specialLiveMatches) =>
                        specialLiveMatches.match_id.toString()
                    }
                    renderItem={(items) => {
                        return (
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <MatchCard matchData={items.item} />
                            </View>
                        )
                    }}
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={specialMatches.sort(function (a, b) {
                        return a.timestamp_start - b.timestamp_start
                    })}
                    keyExtractor={(specialMatches) =>
                        specialMatches.match_id.toString()
                    }
                    renderItem={(items) => {
                        return (
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <MatchCard matchData={items.item} />
                            </View>
                        )
                    }}
                />
            </View>
            <View style={styles.navContainer}>
                <NavigationBtn
                    navigateTo="PointsTable"
                    icon="chart-bar"
                    style={styles.navigationBtn}
                    title="Points Table"
                    ad={false}
                ></NavigationBtn>
                <NavigationBtn
                    navigateTo="Fixtures"
                    icon="tournament"
                    style={styles.navigationBtn}
                    title="Fixtures"
                    ad={false}
                ></NavigationBtn>
                <NavigationBtn
                    navigateTo="Auction"
                    icon="gavel"
                    style={styles.navigationBtn}
                    title="Auction"
                    ad={false}
                ></NavigationBtn>
                <NavigationBtn
                    navigateTo="Records"
                    icon="trophy"
                    style={styles.navigationBtn}
                    title="Records"
                    ad={true}
                ></NavigationBtn>
                <NavigationBtn
                    navigateTo="Venues"
                    icon="google-maps"
                    style={styles.navigationBtn}
                    title="Venues"
                    ad={false}
                ></NavigationBtn>
                <NavigationBtn
                    navigateTo="Winners"
                    icon="trophy-award"
                    style={styles.navigationBtn}
                    title="Winners"
                    ad={false}
                ></NavigationBtn>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                onRefresh={() => onRefresh()}
                refreshing={isFetching}
                data={generalLiveMatches.sort(function (a, b) {
                    return a.timestamp_start - b.timestamp_start
                })}
                keyExtractor={(generalLiveMatches) =>
                    generalLiveMatches.match_id.toString()
                }
                renderItem={(items) => {
                    return (
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <MatchCard matchData={items.item} />
                        </View>
                    )
                }}
            />

            <FlatList
                showsVerticalScrollIndicator={false}
                onRefresh={() => onRefresh()}
                refreshing={isFetching}
                data={generalMatches.sort(function (a, b) {
                    return a.timestamp_start - b.timestamp_start
                })}
                keyExtractor={(generalMatches) =>
                    generalMatches.match_id.toString()
                }
                renderItem={(items) => {
                    return (
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <MatchCard matchData={items.item} />
                        </View>
                    )
                }}
            />

            <View style={styles.news3Row}>
                <Text style={styles.news3}>NEWS</Text>
                <View style={styles.news3Filler}></View>
                <View style={styles.group}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('News')}
                    >
                        <View style={styles.viewAllLabel}>
                            <Text style={styles.viewAll}>View All</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <News ad={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,240,240,1)',
    },
    list: {
        flexGrow: 0,
    },
    navigationBtn: {
        height: 45,
        width: '100%',
        backgroundColor: 'rgba(249,249,249,1)',
        margin: 5,
    },

    navContainer: { width: '100%', marginTop: 15, padding: 10 },
    news3: {
        fontFamily: 'roboto-700',
        color: '#121212',
        height: 15,
        width: 39,
        fontSize: 12,
        marginLeft: 10,
    },
    news3Filler: {
        flex: 1,
        flexDirection: 'row',
    },
    group: {
        width: 40,
        height: 24,
        marginRight: 10,
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
        marginLeft: 5,
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
        flex: 1,
        height: 180,
        left: 0,
        right: 0,
        marginTop: -1,
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

export default Today
