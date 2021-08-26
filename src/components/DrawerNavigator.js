import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { ContactStackNavigator, MainStackNavigator } from './StackNavigator'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            edgeWidth={75}
            drawerStyle={{
                backgroundColor: 'white',
                width: 240,
            }}
        >
            <Drawer.Screen name="Home" component={MainStackNavigator} />
            <Drawer.Screen name="Share" component={MainStackNavigator} />
            <Drawer.Screen name="Share2" component={ContactStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
