import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import RequestApi from '../api/RequestApi'
import MatchCard from '../components/MatchCard'
function Info({ matchDetail }) {
    let umpire = matchDetail.umpires
    let referee = matchDetail.referee
    let toss = matchDetail.toss.text
    let venue = matchDetail.venue.name
    let DandT = matchDetail.date_start
    let series = matchDetail.competition.title
    let match_title = matchDetail.title
    let teamAname = matchDetail.teama.name
    let teamBname = matchDetail.teamb.name
    let matchId = matchDetail.match_id

    const [teamAPlayers, setTeamAplayer] = useState([])
    const [teamBPlayers, setTeaBAplayer] = useState([])
    const teamPlayers = async () => {
        try {
            const response = await RequestApi.get(`matches/${matchId}/squads`)
            setTeamAplayer(response.data.response.teama.squads)
            setTeaBAplayer(response.data.response.teamb.squads)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        teamPlayers()
    }, [])
    return (
        <View style={styles.container}>
            <MatchCard matchData={matchDetail} />
            <Text style={styles.title}>Match Info</Text>
            <View style={styles.card}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoName}>Series</Text>
                    <Text style={styles.infoText}>{series}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoName}>Match</Text>
                    <Text style={styles.infoText}>{match_title}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoName}>Date / Time</Text>
                    <Text
                        style={styles.infoText}
                    >{`${DandT} GMT(UTC +0)`}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoName}>Venue</Text>
                    <Text style={styles.infoText}>{venue}</Text>
                </View>
                {/* <View style={styles.infoRow}>
                    <Text style={styles.infoName}>Capacity</Text>
                    <Text style={styles.infoText}>10000</Text>
                </View> */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoName}>Toss</Text>
                    <Text style={styles.infoText}>{toss}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoName}>Umpire</Text>
                    <Text style={styles.infoText}>{umpire}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoName}>Referee</Text>
                    <Text style={styles.infoText}>{referee}</Text>
                </View>
            </View>
            <Text style={styles.title}>Starting XI</Text>
            <View style={styles.card}>
                <View style={styles.infoRow}>
                    <View style={styles.playerCol}>
                        <Text style={styles.teamAname}>{teamAname}</Text>
                        <FlatList
                            data={teamAPlayers}
                            keyExtractor={(teamAPlayers) =>
                                teamAPlayers.player_id
                            }
                            renderItem={(items) => {
                                return items.item.playing11 === 'true' ? (
                                    <Text style={styles.teamAMemberName}>
                                        {items.item.name + items.item.role_str}
                                    </Text>
                                ) : null
                            }}
                        />
                    </View>

                    <View style={styles.playerCol}>
                        <Text style={styles.teamBname}>{teamBname}</Text>
                        <FlatList
                            data={teamBPlayers}
                            keyExtractor={(teamBPlayers) =>
                                teamBPlayers.player_id
                            }
                            renderItem={(items) => {
                                return items.item.playing11 === 'true' ? (
                                    <Text style={styles.teamBMemberName}>
                                        {items.item.name + items.item.role_str}
                                    </Text>
                                ) : null
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        fontFamily: 'inter-700',
        color: 'rgba(0,0,0,1)',
        fontSize: 14,
    },
    card: {
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
        padding: 15,
        paddingBottom: 0,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    infoName: {
        flex: 4,
        fontFamily: 'inter-700',
        color: 'rgba(0,0,0,1)',
        fontSize: 12,
    },
    infoText: {
        flex: 6,
        fontFamily: 'inter-500',
        color: 'rgba(0,0,0,1)',
        fontSize: 12,
    },
    teamAname: {
        fontFamily: 'inter-700',
        flex: 1,
        fontSize: 14,
    },
    teamBname: {
        fontFamily: 'inter-700',
        flex: 1,
        textAlign: 'right',
        fontSize: 14,
    },
    teamAMemberName: {
        fontFamily: 'inter-500',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
    },
    teamBMemberName: {
        fontFamily: 'inter-500',
        fontSize: 12,
        textAlign: 'right',
        marginTop: 5,
        marginBottom: 5,
    },
    playerCol: {
        flex: 1,
    },
})

export default Info
