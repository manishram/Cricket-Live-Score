import React, { Component, useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    FlatList,
    BackHandler,
} from 'react-native'
import AppApi from '../api/AppApi'
import InterstitialAd from '../components/InterstitialAd'

const Venues = () => {
    const [venueList, setvenueList] = useState([])
    const getVenues = async () => {
        try {
            const response = await AppApi.get('/venues/')
            setvenueList(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getVenues()
        return () => {}
    }, [])
    const backAction = () => {
        window.InterstitialAdComponent.showAd()
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction)

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction)
    }, [])
    return (
        <View style={styles.container}>
            <InterstitialAd />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontFamily: 'inter-700', textAlign: 'center' }}>
                    Venues
                </Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={venueList}
                    keyExtractor={(venueList) => venueList.name}
                    renderItem={(items) => {
                        return (
                            <View style={styles.card}>
                                <Text
                                    style={{
                                        fontFamily: 'inter-600',
                                        textAlign: 'center',
                                        marginBottom: 10,
                                    }}
                                >
                                    {items.item.name}
                                </Text>
                                <View style={styles.divider}></View>

                                <Image
                                    source={{
                                        uri: `${AppApi.defaults.baseURL}/venues/images/${items.item.image}`,
                                    }}
                                    style={styles.image}
                                ></Image>
                                <View
                                    style={{
                                        paddingLeft: 50,
                                    }}
                                >
                                    <View style={styles.tableRow}>
                                        <Text style={styles.leftText}>
                                            City
                                        </Text>
                                        <Text style={styles.rightText}>
                                            {items.item.city}
                                        </Text>
                                    </View>

                                    <View style={styles.tableRow}>
                                        <Text style={styles.leftText}>
                                            Opened
                                        </Text>
                                        <Text style={styles.rightText}>
                                            {items.item.opened}
                                        </Text>
                                    </View>

                                    <View style={styles.tableRow}>
                                        <Text style={styles.leftText}>
                                            Located
                                        </Text>
                                        <Text style={styles.rightText}>
                                            {items.item.located}
                                        </Text>
                                    </View>

                                    <View style={styles.tableRow}>
                                        <Text style={styles.leftText}>
                                            Capacity
                                        </Text>
                                        <Text style={styles.rightText}>
                                            {items.item.capacity}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
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
        padding: 10,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        height: 200,
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    leftText: {
        flex: 1,
        fontFamily: 'inter-600',
    },
    rightText: { flex: 1 },
})

export default Venues
