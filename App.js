import React, { useState } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import AppLoading from 'expo-app-loading'

import * as Font from 'expo-font'
import DetailScore from './src/screens/DetailScore'
import Today from './src/screens/Today'
import Home from './src/screens/Home'
const DrawerNavigation = createDrawerNavigator({
    Home: Home,
    DetailScore: DetailScore,
    Today: Today,
})

const StackNavigation = createStackNavigator(
    {
        DrawerNavigation: {
            screen: DrawerNavigation,
        },
        Home: Home,
        DetailScore: DetailScore,
        Today: Today,
    },
    {
        headerMode: 'none',
    }
)

const AppContainer = createAppContainer(StackNavigation)

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
        return isLoadingComplete ? <AppContainer /> : <AppLoading />
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
