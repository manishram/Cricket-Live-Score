import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import AppApi from '../api/AppApi'

function AuctionPlayerCard(props) {
    let name = props.name
    let team = props.team
    let selling = props.selling
    let status = props.status

    let player_image = `${AppApi.defaults.baseURL}/auction/images/${name}.png`
    return (
        <View style={styles.container}>
            <View style={styles.rectStack}>
                <View style={styles.rect}>
                    <View style={styles.topRow}>
                        <Text style={styles.playerName}>{name}</Text>
                        <Text style={styles.teamName}>{team}</Text>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={{ flexDirection: 'row', padding: 15 }}>
                        <View style={{ flex: 2 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{ flex: 1, fontFamily: 'inter-600' }}
                                >
                                    Selling Price
                                </Text>
                                <Text
                                    style={{ flex: 1, fontFamily: 'inter-500' }}
                                >
                                    {selling}
                                </Text>
                            </View>
                            <View
                                style={{ flexDirection: 'row', marginTop: 10 }}
                            >
                                <Text
                                    style={{ flex: 1, fontFamily: 'inter-600' }}
                                >
                                    Status
                                </Text>

                                {status == 'Sold' ? (
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                color: 'white',
                                                backgroundColor: 'green',
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                borderRadius: 5,
                                                fontSize: 12,
                                                fontFamily: 'inter-500',
                                                width: 38,
                                            }}
                                        >
                                            Sold
                                        </Text>
                                    </View>
                                ) : (
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                color: 'white',
                                                backgroundColor: 'orange',
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                borderRadius: 5,
                                                fontSize: 12,
                                                fontFamily: 'inter-500',
                                                width: 55,
                                            }}
                                        >
                                            Unsold
                                        </Text>
                                    </View>
                                )}
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Image
                                source={{
                                    uri: player_image,
                                }}
                                defaultSource={{}}
                                resizeMode="contain"
                                style={styles.image}
                            ></Image>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginBottom: 10 },
    rect: {
        top: 0,
        width: '100%',
        height: 120,
        position: 'absolute',
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
    playerName: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        flex: 1,
    },
    teamName: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 12,
        flex: 1,
        textAlign: 'right',
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 10,
    },
    topRow: {
        height: 15,
        flexDirection: 'row',
        marginTop: 7,
        marginLeft: 16,
        marginRight: 21,
    },
    rectStack: {
        width: '100%',
        height: 107,
        marginBottom: 10,
    },
    image: {
        height: 64,
        width: 64,
    },
})

export default AuctionPlayerCard
