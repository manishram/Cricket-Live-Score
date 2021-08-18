import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

function TabSwitch(props) {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.recent}>Recent</Text>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.upcoming}>Upcoming</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        width: '100%',
    },
    recent: {
        fontFamily: 'inter-500',
        color: 'rgba(255,255,255,1)',
        flex: 1,
        alignSelf: 'flex-start',
        fontSize: 16,
    },
    today: {
        fontFamily: 'inter-500',
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        flex: 1,
        margin: 'auto',
        fontSize: 16,
    },
    upcoming: {
        fontFamily: 'roboto-500',
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        flex: 1,
        alignSelf: 'flex-end',
        fontSize: 16,
    },
})

export default TabSwitch
