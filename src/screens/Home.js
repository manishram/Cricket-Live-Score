import React, { Component } from 'react'
import { View } from 'react-native'
import TopHeaderBox from '../components/TopHeaderBox'
import TabSwitchScreen from './TabSwitchScreen'
import LowerNavMenu from '../components/LowerNavMenu'
import PointsTable from './PointsTable'
function Home(props) {
    return <TabSwitchScreen navigation={props.navigation} />
}

export default Home
