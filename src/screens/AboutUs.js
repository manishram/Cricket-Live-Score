import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function AboutUs() {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: '700', alignSelf: 'center' }}>
                About Us
            </Text>
            <Text>
                CricScore is created with the vision of giving the up-to-date
                cricket news, information, reliable real time score and accurate
                game statistics. We have extensive coverage of International,
                Domestic, First A Class, ODI, T20I & T20 League around the
                world. Our aim to bring the world cricket to you! For any kind
                of queries or information mail us
            </Text>
            <Text>Email ID : </Text>
            <Text>Contact :</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default AboutUs
