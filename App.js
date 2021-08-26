import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Font from 'expo-font'

import Home from './src/screens/Home'
import TopHeaderBox from './src/components/TopHeaderBox'
import Fixtures from './src/screens/Fixtures'
import News from './src/screens/News'

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

function App() {
    const [isLoadingComplete, setLoadingComplete] = useState(false)
    if (!isLoadingComplete) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        )
    } else {
        return isLoadingComplete ? (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#001B79"
                    barStyle="default"
                    showHideTransition="slide"
                    hidden={false}
                />

                <View style={{ flex: 1 }}>
                    <View>
                        <TopHeaderBox />
                    </View>
                    <View style={{ flex: 1, paddingTop: 50 }}>
                        <NavigationContainer>
                            <Tab.Navigator
                                screenOptions={({ route }) => ({
                                    tabBarIcon: ({ focused, color, size }) => {
                                        let iconName
                                        if (route.name === 'Home') {
                                            iconName = focused ? 'home' : 'home'
                                        } else if (route.name === 'Fixture') {
                                            iconName = focused
                                                ? 'tournament'
                                                : 'tournament'
                                        } else if (route.name === 'News') {
                                            iconName = focused
                                                ? 'newspaper'
                                                : 'newspaper'
                                        } else if (route.name === 'Series') {
                                            iconName = focused
                                                ? 'cricket'
                                                : 'cricket'
                                        }
                                        return (
                                            <Icons
                                                name={iconName}
                                                size={size}
                                                color={color}
                                            />
                                        )
                                    },

                                    headerShown: false,
                                })}
                                tabBarOptions={{
                                    activeTintColor: '#001B79',
                                    inactiveTintColor: 'gray',
                                }}
                            >
                                <Tab.Screen
                                    name="Home"
                                    component={HomeScreen}
                                />
                                <Tab.Screen
                                    name="Series"
                                    component={SeriesScreen}
                                />
                                <Tab.Screen
                                    name="Fixture"
                                    component={FixturesScreen}
                                />
                                <Tab.Screen
                                    name="News"
                                    component={NewsScreen}
                                />
                            </Tab.Navigator>
                        </NavigationContainer>
                    </View>
                </View>
            </SafeAreaView>
        ) : (
            <AppLoading />
        )
    }
}
async function loadResourcesAsync() {
    await Promise.all([
        Font.loadAsync({
            'inter-regular': require('./src/assets/fonts/inter-regular.ttf'),
            'inter-700': require('./src/assets/fonts/inter-700.ttf'),
            'inter-500': require('./src/assets/fonts/inter-500.ttf'),
            'roboto-500': require('./src/assets/fonts/roboto-500.ttf'),
            'roboto-regular': require('./src/assets/fonts/roboto-regular.ttf'),
            'roboto-700': require('./src/assets/fonts/roboto-700.ttf'),
            'inter-600': require('./src/assets/fonts/inter-600.ttf'),
        }),
    ])
}
function handleLoadingError(error) {
    console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true)
}

export default App
