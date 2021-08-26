import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TabSwitchScreen from '../screens/TabSwitchScreen'
import DetailScore from '../screens/DetailScore'
import PointsTable from '../screens/PointsTable'
import Fixtures from '../screens/Fixtures'
import Auction from '../screens/Auction'
import Records from '../screens/Records'
import Venues from '../screens/Venues'
import News from '../screens/News'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="PointsTable" component={PointsTable} />
            <Stack.Screen name="Fixtures" component={Fixtures} />
            <Stack.Screen name="Auction" component={Auction} />
            <Stack.Screen name="Records" component={Records} />
            <Stack.Screen name="Venues" component={Venues} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="DetailScore" component={DetailScore} />
        </Stack.Navigator>
    )
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Venues" component={Venues} />
        </Stack.Navigator>
    )
}

export { MainStackNavigator, ContactStackNavigator }
