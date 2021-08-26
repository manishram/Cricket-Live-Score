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
import PrivacyPolicy from '../screens/PrivacyPolicy'
import TermsAndCondition from '../screens/TermsAndCondition'

const Stack = createStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="TabSwitchScreen" component={TabSwitchScreen} />
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

const TermsAndConditionStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Terms and Condition"
                component={TermsAndCondition}
            />
        </Stack.Navigator>
    )
}
const PrivacyPolicyStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        </Stack.Navigator>
    )
}

export { MainStackNavigator, TermsAndConditionStack, PrivacyPolicyStack }
