import React, { Component, useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView,
    ActivityIndicator,
    BackHandler,
} from 'react-native'
import { TabView } from 'react-native-tab-view'
import { TabBar } from 'react-native-tab-view'
import AuctionPlayerCard from './AuctionPlayerCard'
import AppApi from '../api/AppApi'
import InterstitialAd from '../components/InterstitialAd'

const initialLayout = { width: Dimensions.get('window').width }

function AuctionTopNav() {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'batsmen', title: 'Batsmen' },
        { key: 'bowlers', title: 'Bowlers' },
        { key: 'wicket-keepers', title: 'Wicket Keepers' },
        { key: 'all-rounders', title: 'All Rounders' },
    ])

    const [auctionBatsmen, setAuctionBatsmen] = useState([])
    const [isLoadingBatsMan, setisLoadingBatsMan] = useState()
    const getAuctionBatsmen = async () => {
        setisLoadingBatsMan(true)
        try {
            const response = await AppApi.get(`/auction/batsmen/`)
            setAuctionBatsmen(response.data)
            setisLoadingBatsMan(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAuctionBatsmen()
    }, [])

    const [auctionBowlers, setAuctionBowlers] = useState([])
    const [isLoadingBowlers, setisLoadingBowlers] = useState()
    const getAuctionBowlers = async () => {
        setisLoadingBowlers(true)
        try {
            const response = await AppApi.get(`/auction/bowlers/`)
            setAuctionBowlers(response.data)
            setisLoadingBowlers(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAuctionBowlers()
    }, [])

    const [auctionWicketKeepers, setAauctionWicketKeepers] = useState([])
    const [isLoadingWK, setisLoadingWK] = useState()

    const getAuctionWicketKeepers = async () => {
        setisLoadingWK(true)
        try {
            const response = await AppApi.get(`/auction/wicket-keepers/`)
            setAauctionWicketKeepers(response.data)
            setisLoadingWK(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAuctionWicketKeepers()
    }, [])

    const [auctionAllRounders, setAauctionAllRounders] = useState([])
    const [isLoadingAR, setisLoadingAR] = useState()
    const getAuctionAllRounders = async () => {
        setisLoadingAR(true)
        try {
            const response = await AppApi.get(`/auction/all-rounders/`)
            setAauctionAllRounders(response.data)
            setisLoadingAR(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAuctionAllRounders()
    }, [])
    const backAction = () => {
        window.InterstitialAdComponent.showAd()
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction)

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction)
    }, [])
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'batsmen':
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                            <InterstitialAd />
                            {isLoadingBatsMan ? (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        padding: 10,
                                        height: 400,
                                    }}
                                >
                                    <ActivityIndicator
                                        size="large"
                                        color="#0000ff"
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}
                                    />
                                </View>
                            ) : (
                                <FlatList
                                    data={auctionBatsmen}
                                    keyExtractor={(auctionBatsmen) =>
                                        auctionBatsmen.name
                                    }
                                    renderItem={(items) => {
                                        return (
                                            <AuctionPlayerCard
                                                name={items.item.name}
                                                team={items.item.team_name}
                                                selling={items.item.selling}
                                                status={items.item.status}
                                            />
                                        )
                                    }}
                                />
                            )}
                        </View>
                    </ScrollView>
                )

            case 'bowlers':
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                            {isLoadingBowlers ? (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        padding: 10,
                                        height: 400,
                                    }}
                                >
                                    <ActivityIndicator
                                        size="large"
                                        color="#0000ff"
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}
                                    />
                                </View>
                            ) : (
                                <FlatList
                                    data={auctionBowlers}
                                    keyExtractor={(auctionBowlers) =>
                                        auctionBowlers.name
                                    }
                                    renderItem={(items) => {
                                        return (
                                            <AuctionPlayerCard
                                                name={items.item.name}
                                                team={items.item.team_name}
                                                selling={items.item.selling}
                                                status={items.item.status}
                                            />
                                        )
                                    }}
                                />
                            )}
                        </View>
                    </ScrollView>
                )

            case 'wicket-keepers':
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                            {isLoadingWK ? (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        padding: 10,
                                        height: 400,
                                    }}
                                >
                                    <ActivityIndicator
                                        size="large"
                                        color="#0000ff"
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}
                                    />
                                </View>
                            ) : (
                                <FlatList
                                    data={auctionWicketKeepers}
                                    keyExtractor={(auctionWicketKeepers) =>
                                        auctionWicketKeepers.name
                                    }
                                    renderItem={(items) => {
                                        return (
                                            <AuctionPlayerCard
                                                name={items.item.name}
                                                team={items.item.team_name}
                                                selling={items.item.selling}
                                                status={items.item.status}
                                            />
                                        )
                                    }}
                                />
                            )}
                        </View>
                    </ScrollView>
                )
            case 'all-rounders':
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                            {isLoadingAR ? (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        padding: 10,
                                        height: 400,
                                    }}
                                >
                                    <ActivityIndicator
                                        size="large"
                                        color="#0000ff"
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}
                                    />
                                </View>
                            ) : (
                                <FlatList
                                    data={auctionAllRounders}
                                    keyExtractor={(auctionAllRounders) =>
                                        auctionAllRounders.name
                                    }
                                    renderItem={(items) => {
                                        return (
                                            <AuctionPlayerCard
                                                name={items.item.name}
                                                team={items.item.team_name}
                                                selling={items.item.selling}
                                                status={items.item.status}
                                            />
                                        )
                                    }}
                                />
                            )}
                        </View>
                    </ScrollView>
                )
            default:
                return null
        }
    }
    return (
        <TabView
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    indicatorStyle={styles.indicator}
                    style={styles.tabbar}
                    labelStyle={styles.label}
                    tabStyle={styles.tabStyle}
                    scrollEnabled={true}
                />
            )}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
                backgroundColor: 'rgba(240, 240, 240, 1)',
                elevation: 0,
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
    role: {
        fontFamily: 'inter-700',
        color: '#121212',
        fontSize: 14,
        marginBottom: 3,
        marginTop: 8,
        marginLeft: 10,
    },

    tabbar: {
        backgroundColor: '#0024A5',
    },
    indicator: {
        backgroundColor: '#DA010E',
        height: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    label: {
        fontWeight: '400',
    },
    tabStyle: {
        width: 'auto',
    },
})
export default AuctionTopNav
