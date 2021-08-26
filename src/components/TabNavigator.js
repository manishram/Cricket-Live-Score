import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from '../screens/TabSwitchScreen'
import Fixtures from '../screens/Fixtures'
import News from '../screens/News'

function HomeScreen({ navigation }) {
    return <Home />
}
function SeriesScreen() {
    return <Fixtures />
}
function FixturesScreen() {
    return <Fixtures />
}
function NewsScreen() {
    return <News />
}

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home'
                    } else if (route.name === 'Fixture') {
                        iconName = focused ? 'tournament' : 'tournament'
                    } else if (route.name === 'News') {
                        iconName = focused ? 'newspaper' : 'newspaper'
                    } else if (route.name === 'Series') {
                        iconName = focused ? 'cricket' : 'cricket'
                    }
                    return <Icons name={iconName} size={size} color={color} />
                },

                headerShown: false,
            })}
            tabBarOptions={{
                activeTintColor: '#001B79',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Series" component={SeriesScreen} />
            <Tab.Screen name="Fixture" component={FixturesScreen} />
            <Tab.Screen name="News" component={NewsScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator
