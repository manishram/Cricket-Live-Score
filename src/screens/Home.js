import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import TopHeader from '../components/TopHeader'
import TopHeaderBox from '../components/TopHeaderBox'
import TabSwitchScreen from './TabSwitchScreen'

function Home() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <View>
                <TopHeader />
                <TopHeaderBox />
            </View>
            <TabSwitchScreen />
        </View>
    )
}

export default Home
