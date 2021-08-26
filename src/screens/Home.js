import React, { Component } from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabSwitchScreen from './TabSwitchScreen'
import DetailScore from './DetailScore'
import PointsTable from './PointsTable'
import Fixtures from './Fixtures'
import Auction from './Auction'
import Records from './Records'
import Venues from './Venues'
import News from './News'
const Stack = createStackNavigator()
function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabSwitchScreen"
                component={TabSwitchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PointsTable"
                component={PointsTable}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Fixtures"
                component={Fixtures}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Auction"
                component={Auction}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Records"
                component={Records}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Venues"
                component={Venues}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="News"
                component={News}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetailScore"
                component={DetailScore}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Home
