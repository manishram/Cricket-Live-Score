import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

function TopHeader() {
    return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
    container: {
        height: 128,
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#0024A5',
    },
    rect: {
        width: '100%',
        height: 120,
    },
})

export default TopHeader
