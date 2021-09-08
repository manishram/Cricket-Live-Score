import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function PointsTableRow({ name, match, win, loss, nrr, points, image, last5 }) {
    var last5Array = last5.split(',')
    return (
        <View style={styles.image1StackStack}>
            <View style={styles.image1Stack}></View>
            <View style={{ flexDirection: 'row', flex: 2 }}>
                <Image
                    source={{ uri: image }}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
                <Text style={styles.csk4}>{name}</Text>
            </View>

            <Text style={styles.csk5}>{match}</Text>
            <Text style={styles.csk6}>{win}</Text>
            <Text style={styles.csk7}>{loss}</Text>
            <Text style={styles.csk8}>{nrr}</Text>
            <Text style={styles.csk9}>{points}</Text>
            <View
                style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {last5Array.map((item) => {
                    return item === 'W' ? (
                        <View
                            style={{
                                width: 8,
                                height: 8,
                                margin: 3,
                                borderRadius: 2,
                                backgroundColor: 'green',
                            }}
                        ></View>
                    ) : (
                        <View
                            style={{
                                width: 8,
                                height: 8,
                                margin: 3,
                                borderRadius: 2,
                                backgroundColor: '#DA010E',
                            }}
                        ></View>
                    )
                })}
            </View>
            <View style={styles.divider}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 24,
        width: 24,
        marginTop: 5,
    },
    divider: {
        top: 37,
        width: '100%',
        height: 1,
        position: 'absolute',
        backgroundColor: '#E6E6E6',
    },
    image1Stack: {
        top: 0,
        left: 0,
        width: '100%',
        height: 32,
        position: 'absolute',
    },
    csk4: {
        top: 10,
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
        flex: 1,
    },
    lastFive: {
        top: 0,
        left: 260,
        position: 'absolute',
    },
    csk5: {
        top: 10,
        flex: 1,
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    csk6: {
        top: 10,
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
        flex: 1,
    },
    csk7: {
        top: 10,
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
        flex: 1,
    },
    csk8: {
        top: 10,
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
        flex: 1.5,
    },
    csk9: {
        top: 10,
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
        flex: 1,
    },

    image1StackStack: {
        width: '100%',
        height: 32,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
})

export default PointsTableRow
