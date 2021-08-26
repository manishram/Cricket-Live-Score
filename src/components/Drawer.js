import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'

function Feed() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Feed Screen</Text>
        </View>
    )
}

function Article() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Article Screen</Text>
        </View>
    )
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    )
}

const DrawerX = createDrawerNavigator()

function Drawer() {
    return (
        <DrawerX.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <DrawerX.Screen name="Feed" component={Feed} />
            <DrawerX.Screen name="Article" component={Article} />
        </DrawerX.Navigator>
    )
}

export default Drawer
