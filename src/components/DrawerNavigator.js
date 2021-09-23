import React from 'react'
import { Share } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'
import { ContactStackNavigator, MainStackNavigator } from './StackNavigator'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Privacy from '../screens/Privacy'
import tNc from '../screens/tNc'
import AboutUs from '../screens/AboutUs'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Hey, download the CricScore app from the play store to get live cricket scores, cricket news, game statistics, and other updates.',
            })
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <Drawer.Navigator
            edgeWidth={75}
            drawerStyle={{
                backgroundColor: 'white',
                width: 240,
            }}
            drawerContent={(props) => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem
                            label="Share App"
                            onPress={onShare}
                            icon={({ focused, color, size }) => (
                                <Icons
                                    color={focused ? '#7cc' : '#ccc'}
                                    size={size}
                                    name={
                                        focused
                                            ? 'share-variant'
                                            : 'share-variant'
                                    }
                                />
                            )}
                        />
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size }) => (
                        <Icons
                            name="home"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="About Us"
                component={AboutUs}
                options={{
                    title: 'About Us',
                    drawerIcon: ({ focused, size }) => (
                        <Icons
                            name="android"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Privacy Policy"
                component={Privacy}
                options={{
                    title: 'Privacy Policy',
                    drawerIcon: ({ focused, size }) => (
                        <Icons
                            name="lock"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Terms & Conditions"
                component={tNc}
                options={{
                    title: 'Terms & Conditions',
                    drawerIcon: ({ focused, size }) => (
                        <Icons
                            name="file-document"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
