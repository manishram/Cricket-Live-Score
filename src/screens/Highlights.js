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

function Hightlights({ matchDetail }) {
    let matchId = matchDetail.match_id

    const [batsman, setBatsman] = useState([])
    const [bowler, setBowler] = useState([])
    const [commentary, setCommentary] = useState([])

    const livePlayers = async () => {
        try {
            const response = await RequestApi.get(`matches/${matchId}/live`)
            setBatsman(response.data.response.batsmen)
            setBowler(response.data.response.bowlers)
            setCommentary(response.data.response.commentaries)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        livePlayers()
    }, [])
    return (
        <View style={styles.container}>
            <MatchCard matchData={matchDetail} />
            <Text style={styles.title}>Highlights</Text>

            <View style={styles.card}>
                <FlatList
                    data={commentary}
                    inverted={true}
                    keyExtractor={(commentary, index) => index.toString()}
                    renderItem={(items) => {
                        return items.item.event !== 'overend' ? (
                            items.item.score > 3 ||
                            items.item.event === 'wicket' ? (
                                <View style={[styles.CommetaryRow]}>
                                    <View
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{ fontFamily: 'inter-600' }}
                                        >
                                            {items.item.over +
                                                '.' +
                                                items.item.ball}
                                        </Text>
                                        <Circle
                                            textValue={items.item.score}
                                            style={styles.circle}
                                        />
                                    </View>
                                    <Text style={styles.CommentaryText}>
                                        {items.item.commentary}
                                    </Text>
                                </View>
                            ) : null
                        ) : null
                    }}
                />
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
    CommetaryRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    CommentaryText: { flex: 6, marginLeft: 10 },
})

export default Hightlights
