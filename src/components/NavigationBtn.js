import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function NavigationBtn({ icon, title }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <View style={styles.iconRow}>
                    <Icon name={icon} style={styles.icon}></Icon>
                    <Text style={styles.btnText}>{title}</Text>
                    <Icon name="chevron-right" style={styles.chevIcon}></Icon>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    button: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'rgba(249,249,249,1)',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 3,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        flexDirection: 'row',
    },
    icon: {
        color: 'rgba(0,27,121,1)',
        fontSize: 25,
        height: 27,
        width: 25,
    },
    btnText: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 22,
        marginTop: 5,
    },
    chevIcon: {
        color: 'rgba(0,27,121,1)',
        fontSize: 20,
        height: 22,
        width: 20,
        alignSelf: 'flex-end',
    },
    iconRow: {
        height: 27,
        flexDirection: 'row',
        flex: 1,
        marginRight: 10,
        marginLeft: 20,
        marginTop: 9,
    },
})

export default NavigationBtn
