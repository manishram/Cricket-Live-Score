import React, { Component } from 'react'
import { View, StatusBar, TouchableOpacity, Text } from 'react-native'
import TopHeader from '../components/TopHeader'
import TopHeaderBox from '../components/TopHeaderBox'
import TabSwitchScreen from './TabSwitchScreen'
import LowerNavMenu from '../components/LowerNavMenu'
function Home(props) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <View>
                <TopHeader />
                <TopHeaderBox />
            </View>
            <TabSwitchScreen navigation={props.navigation} />
            {/* <LowerNavMenu /> */}
        </View>
    )
}

export default Home
