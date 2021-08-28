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
import Circle from '../components/Circle'

function Live({ matchDetail }) {
    let matchId = matchDetail.match_id

    const [batsman, setBatsman] = useState([])
    const [bowler, setBowler] = useState([])
    const livePlayers = async () => {
        try {
            const response = await RequestApi.get(`matches/${matchId}/live`)
            setBatsman(response.data.response.batsmen)
            setBowler(response.data.response.bowlers)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        livePlayers()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Live Score</Text>
            <MatchCard matchData={matchDetail} />

            <Text style={styles.title}>Player Stats</Text>
            <View style={styles.card}>
                <View style={styles.livePlayerRow}>
                    <Text style={[styles.livePlayerHeaderText, styles.a]}>
                        Batsman
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.b]}>
                        R
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.c]}>
                        B
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.d]}>
                        4s
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.e]}>
                        6s
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.f]}>
                        SR
                    </Text>
                </View>
                <FlatList
                    data={batsman}
                    keyExtractor={(batsman) => batsman.batsman_id}
                    renderItem={(items) => {
                        return (
                            <View style={styles.livePlayerRow}>
                                <Text style={[styles.livePlayerText, styles.a]}>
                                    {items.item.name}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.b]}>
                                    {items.item.runs}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.c]}>
                                    {items.item.balls_faced}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.d]}>
                                    {items.item.fours}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.e]}>
                                    {items.item.sixes}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.f]}>
                                    {items.item.strike_rate}
                                </Text>
                            </View>
                        )
                    }}
                />

                <View style={styles.lineStyle} />
                <View style={styles.livePlayerRow}>
                    <Text style={[styles.livePlayerHeaderText, styles.a]}>
                        Bowler
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.b]}>
                        O
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.c]}>
                        M
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.d]}>
                        R
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.e]}>
                        W
                    </Text>
                    <Text style={[styles.livePlayerHeaderText, styles.f]}>
                        ER
                    </Text>
                </View>

                <FlatList
                    data={bowler}
                    keyExtractor={(bowler) => bowler.bowler_id}
                    renderItem={(items) => {
                        return (
                            <View style={styles.livePlayerRow}>
                                <Text style={[styles.livePlayerText, styles.a]}>
                                    {items.item.name}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.b]}>
                                    {items.item.overs}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.c]}>
                                    {items.item.maidens}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.d]}>
                                    {items.item.runs_conceded}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.e]}>
                                    {items.item.wickets}
                                </Text>
                                <Text style={[styles.livePlayerText, styles.f]}>
                                    {items.item.econ}
                                </Text>
                            </View>
                        )
                    }}
                />
            </View>
            <Text style={styles.title}>Starting XI</Text>
            <View style={styles.card}>
                <View style={styles.overBoxTopRow}>
                    <Text style={[styles.title, { flex: 1 }]}>
                        End of Over 50
                    </Text>
                    <Circle textValue="W" style={styles.circle} />
                    <Circle textValue="1" style={styles.circle} />
                    <Circle textValue="2" style={styles.circle} />
                    <Circle textValue="0" style={styles.circle} />
                    <Circle textValue="4" style={styles.circle} />
                    <Circle textValue="6" style={styles.circle} />
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
    livePlayerRow: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    livePlayerHeaderText: {
        fontFamily: 'inter-700',
        color: 'rgba(0,0,0,1)',
        fontSize: 12,
    },
    livePlayerText: {
        fontFamily: 'inter-500',
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
    },
    a: {
        flex: 2.5,
    },
    b: {
        flex: 1,
        textAlign: 'center',
    },
    c: {
        flex: 1,
        textAlign: 'center',
    },
    d: {
        flex: 1,
        textAlign: 'center',
    },
    e: {
        flex: 1,
        textAlign: 'center',
    },
    f: {
        flex: 1,
        textAlign: 'center',
    },
    lineStyle: {
        height: 1,
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.05)',
        marginTop: 10,
        marginBottom: 10,
    },
    overBoxTopRow: {
        flexDirection: 'row',
    },
    circle: {
        flex: 1,
    },
})

export default Live
