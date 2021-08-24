import React, { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AppLoading from 'expo-app-loading'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'

import * as Font from 'expo-font'
import Home from './src/screens/Home'
import TopHeaderBox from './src/components/TopHeaderBox'
import Fixtures from './src/screens/Fixtures'
import News from './src/screens/News'

const TabNavigator = createBottomTabNavigator(
    {
        Home: Home,
        Series: Fixtures,
        Fixtures: Fixtures,
        News: News,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state
                let IconComponent = Ionicons
                let iconName
                if (routeName === 'Home') {
                    iconName = focused ? 'home' : 'home'
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'Fixtures') {
                    iconName = focused ? 'tournament' : 'tournament'
                } else if (routeName === 'News') {
                    iconName = focused ? 'newspaper' : 'newspaper'
                } else if (routeName === 'Series') {
                    iconName = focused ? 'cricket' : 'cricket'
                }

                // You can return any component that you like here!
                return (
                    <IconComponent
                        name={iconName}
                        size={25}
                        color={tintColor}
                    />
                )
            },
        }),
        tabBarOptions: {
            activeTintColor: '#001B79',
            inactiveTintColor: 'gray',
        },
    }
)
const AppContainer = createAppContainer(TabNavigator)

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
                        <AppContainer />
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
