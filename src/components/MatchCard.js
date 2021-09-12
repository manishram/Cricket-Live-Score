import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import RequestApi from '../api/RequestApi'

function MatchCard(props) {
    const navigation = useNavigation()

    const matchUpcoming = 1
    const matchComplete = 2
    const matchLive = 3

    let matchId = props.matchData.match_id
    let teamaId = props.matchData.teama.team_id
    let teambId = props.matchData.teamb.team_id
    let teama_name = props.matchData.teama.name
    let teamb_name = props.matchData.teamb.name
    let teama_logo = props.matchData.teama.logo_url
    let teamb_logo = props.matchData.teamb.logo_url
    let tournament_name = props.matchData.competition.title
    let matchSubTitle = props.matchData.subtitle
    let matchStatus = props.matchData.status
    let statusNote = props.matchData.status_note
    let matchStatusStr = props.matchData.status_str
    let timeStart = props.matchData.timestamp_start
    let timeEnd = props.matchData.timestamp_end
    let endinfo = new Date(timeEnd * 1000)
    let endDate = endinfo.toLocaleString()

    let startinfo = new Date(timeStart * 1000)
    let startDate = startinfo.toLocaleString()

    var today = new Date().setHours(0, 0, 0, 0)
    let matchday = new Date(timeStart).setHours(0, 0, 0, 0)

    var date = new Date(timeStart * 1000)
    var hours = date.getHours()
    var minutes = '0' + date.getMinutes()
    let ampm = 'AM'
    if (hours >= 12) {
        ampm = 'PM'
    }
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes

    var time = hours + ':' + minutes.substr(-2) + ' ' + ampm
    let gameState
    matchStatus == matchLive ? (gameState = props.matchData.game_state) : null

    const [teamaScore, setTeamaScore] = useState('0/0 (0.0)')
    const [teambScore, setTeambScore] = useState('0/0 (0.0)')
    const updateScore = async () => {
        try {
            const response = await RequestApi.get(`/matches/${matchId}/live`)

            if (teamaId == response.data.response.live_inning.batting_team_id) {
                setTeamaScore(response.data.response.live_inning.scores_full)
                if (response.data.response.live_inning_number == 2) {
                    setTeambScore(response.data.response.live_score.target)
                }
            } else {
                setTeambScore(response.data.response.live_inning.scores_full)
                if (response.data.response.live_inning_number == 2) {
                    setTeamaScore(response.data.response.live_score.target)
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (matchStatus === matchLive) {
            updateScore()
            const interval = setInterval(() => {
                updateScore()
            }, 10000)
            return () => clearInterval(interval)
        } else {
            setTeamaScore(props.matchData.teama.scores_full)
            setTeambScore(props.matchData.teamb.scores_full)
        }
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    style={styles.matchNameRow}
                    onPress={() =>
                        navigation.navigate('SeriesMatches', {
                            cid: props.matchData.competition.cid,
                            seriesName: props.matchData.competition.title,
                            totalMatches:
                                props.matchData.competition.total_matches,
                        })
                    }
                >
                    <View style={{ flex: 4 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.cskVsMi, { flex: 1 }]}>
                                {tournament_name}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Icon name="chevron-right" style={styles.icon}></Icon>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DetailMatchTopNav', {
                        matchData: props.matchData,
                    })
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginRight: 10,
                    }}
                >
                    {matchStatus === matchLive ? (
                        gameState === 7 ? (
                            <Text
                                style={{
                                    marginTop: 5,
                                    color: '#616161',
                                    backgroundColor: '#dcdcdc',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    borderRadius: 5,
                                    fontSize: 12,
                                    fontFamily: 'inter-600',
                                }}
                            >
                                Stumps
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    marginTop: 5,
                                    color: 'white',
                                    backgroundColor: 'rgba(219,0,0,1)',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    borderRadius: 5,
                                    fontSize: 12,
                                    fontFamily: 'inter-600',
                                }}
                            >
                                Live
                            </Text>
                        )
                    ) : matchStatus === matchUpcoming ? (
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    marginTop: 5,
                                    color: 'white',
                                    backgroundColor: '#5283e4',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    borderRadius: 5,
                                    fontSize: 12,
                                    fontFamily: 'inter-600',
                                    width: 72,
                                }}
                            >
                                Scheduled
                            </Text>

                            <Text style={{ marginTop: 5, color: 'gray' }}>
                                {` ${startDate}`}
                            </Text>
                        </View>
                    ) : matchStatus === matchComplete ? (
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    marginTop: 5,
                                    color: '#616161',
                                    backgroundColor: '#dcdcdc',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    padding: 2,
                                    borderRadius: 5,
                                    fontSize: 12,
                                    fontFamily: 'inter-600',
                                }}
                            >
                                Finished
                            </Text>
                            <Text
                                style={{ marginTop: 5, color: 'gray' }}
                            >{` ${endDate}`}</Text>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    marginTop: 5,
                                    color: 'white',
                                    backgroundColor: 'orange',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    padding: 2,
                                    borderRadius: 5,
                                    fontSize: 12,
                                    fontFamily: 'inter-600',
                                }}
                            >
                                Cancelled
                            </Text>
                            <Text
                                style={{ marginTop: 5, color: 'gray' }}
                            >{` ${endDate}`}</Text>
                        </View>
                    )}
                    <Text
                        style={[
                            styles.cskVsMi,
                            {
                                flex: 1,
                                fontFamily: 'inter-500',
                                color: 'rgba(0,27,121,1)',
                                textAlign: 'right',
                            },
                        ]}
                    >
                        {matchSubTitle}
                    </Text>
                </View>

                <View style={styles.imageRow}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: teama_logo }}
                            style={styles.image}
                        ></Image>
                    </View>
                    <View
                        style={{
                            flex: 3,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={styles.teamNameText}>{teama_name}</Text>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={styles.scoreText}>{teamaScore}</Text>
                    </View>
                </View>

                <View style={styles.imageRow}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: teamb_logo }}
                            resizeMode="contain"
                            style={styles.image}
                        ></Image>
                    </View>
                    <View
                        style={{
                            flex: 3,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={styles.teamNameText}>{teamb_name}</Text>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={styles.scoreText}>{teambScore}</Text>
                    </View>
                </View>

                {matchStatus != matchUpcoming ? (
                    <View>
                        <View style={styles.divider}></View>
                        <Text style={styles.text}>{statusNote}</Text>
                    </View>
                ) : null}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        marginTop: 10,
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
        right: 10,
        position: 'absolute',
    },
    matchNameRow: {
        height: 40,
        flexDirection: 'row',
        marginTop: 4,
        marginLeft: 10,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
    },
    image: {
        height: 32,
        width: 32,
    },
    teamNameText: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
    },
    scoreText: {
        fontFamily: 'inter-500',
        color: 'rgba(99,99,99,1)',
        fontSize: 12,
        textAlign: 'right',
    },
    imageRow: {
        height: 32,
        flexDirection: 'row',
        marginTop: 8,
        margin: 10,
    },
    image1: {
        height: 32,
        width: 32,
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
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'center',
    },
})

export default MatchCard
