import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function PointsTableRow({ name, match, win, loss, draw, nrr, points, image }) {
    return (
        <View style={styles.image1StackStack}>
            <View style={styles.image1Stack}>
                <Image
                    source={{ uri: image }}
                    resizeMode="contain"
                    style={styles.image1}
                ></Image>
            </View>
            <Text style={styles.csk4}>{name}</Text>
            <Text style={styles.csk5}>{match}</Text>
            <Text style={styles.csk6}>{win}</Text>
            <Text style={styles.csk7}>{loss}</Text>
            <Text style={styles.csk8}>{draw}</Text>
            <Text style={styles.csk9}>{nrr}</Text>
            <Text style={styles.csk9}>{points}</Text>
            <View style={styles.divider}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    image1: {
        position: 'absolute',
        top: 0,
        height: 32,
        width: 24,
    },
    divider: {
        top: 30,
        left: 0,
        width: '100%',
        height: 1,
        position: 'absolute',
        backgroundColor: '#E6E6E6',
    },
    image1Stack: {
        top: 0,
        left: 0,
        width: 359,
        height: 32,
        position: 'absolute',
    },
    csk4: {
        top: 10,
        left: 35,
        position: 'absolute',
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    lastFive: {
        top: 0,
        left: 260,
        position: 'absolute',
    },
    csk5: {
        top: 10,
        left: 90,
        position: 'absolute',
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    csk6: {
        top: 10,
        left: 120,
        position: 'absolute',
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    csk7: {
        top: 10,
        left: 150,
        position: 'absolute',
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    csk8: {
        top: 10,
        left: 190,
        position: 'absolute',
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    csk9: {
        top: 10,
        left: 240,
        position: 'absolute',
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    csk11: {
        top: 0,
        left: 0,
        position: 'absolute',
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    csk10: {
        top: 0,
        left: 10,
        position: 'absolute',
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 10,
        textAlign: 'center',
    },
    group2: {
        top: 0,
        left: 0,
        width: 11,
        height: 12,
        position: 'absolute',
    },
    rect3: {
        width: 11,
        height: 12,
        backgroundColor: 'rgba(27,192,117,1)',
        borderRadius: 2,
    },
    csk10Stack: {
        top: 10,
        left: 299,
        width: 11,
        height: 12,
        position: 'absolute',
    },
    group1: {
        top: 10,
        left: 311,
        width: 11,
        height: 12,
        position: 'absolute',
    },
    rect2: {
        left: 10,
        top: 10,
        position: 'absolute',
        width: 11,
        height: 12,
        backgroundColor: 'rgba(208,2,27,1)',
        borderRadius: 2,
    },
    group3: {
        top: 10,
        left: 324,
        width: 11,
        height: 12,
        position: 'absolute',
    },
    rect4: {
        left: 25,
        top: 10,
        position: 'absolute',
        width: 11,
        height: 12,
        backgroundColor: 'rgba(27,192,117,1)',
        borderRadius: 2,
    },
    group4: {
        top: 10,
        left: 287,
        width: 11,
        height: 12,
        position: 'absolute',
    },
    rect5: {
        left: 40,
        top: 10,
        position: 'absolute',
        width: 11,
        height: 12,
        backgroundColor: 'rgba(27,192,117,1)',
        borderRadius: 2,
    },
    group5: {
        top: 10,
        left: 336,
        width: 11,
        height: 12,
        position: 'absolute',
        justifyContent: 'center',
    },
    rect6: {
        left: 55,
        top: 10,
        position: 'absolute',
        width: 11,
        height: 12,
        backgroundColor: 'rgba(208,2,27,1)',
        borderRadius: 2,
        alignSelf: 'center',
    },
    rect7: {
        left: 70,
        top: 10,
        position: 'absolute',
        width: 11,
        height: 12,
        backgroundColor: 'rgba(27,192,117,1)',
        borderRadius: 2,
    },
    image1StackStack: {
        width: '100%',
        height: 32,
        marginTop: 4,
    },
})

export default PointsTableRow
