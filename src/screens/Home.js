import React, { Component } from 'react'
import { View, StatusBar, TouchableOpacity, Text } from 'react-native'
import TopHeaderBox from '../components/TopHeaderBox'
import TabSwitchScreen from './TabSwitchScreen'
import LowerNavMenu from '../components/LowerNavMenu'
import PointsTable from './PointsTable'
function Home(props) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <View>
                <TopHeaderBox />
            </View>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <TabSwitchScreen navigation={props.navigation} />
            </View>

            {/* <LowerNavMenu /> */}
        </View>
    )
}

export default Home
