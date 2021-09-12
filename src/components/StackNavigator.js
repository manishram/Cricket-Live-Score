import React from 'react'
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native'
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
import DetailMatchTopNav from './DetailMatchTopNav'
import SeriesMatches from '../screens/SeriesMatches'
import Privacy from '../screens/Privacy'
import tNc from '../screens/tNc'
import AboutUs from '../screens/AboutUs'
import Winners from '../screens/Winners'
import NewsDetail from '../screens/NewsDetail'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/core'

const Stack = createStackNavigator()

const MainStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={(navigation) => ({
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#0024A5',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitleAlign: 'center',
                headerTitle: () => {
                    return (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={require('../assets/images/logo-sm.png')}
                                style={styles.image}
                            ></Image>
                            <Text numberOfLines={1} style={styles.iplLive2021}>
                                CricScore
                            </Text>
                        </View>
                    )
                },
                headerLeft: () => {
                    const navigation = useNavigation()
                    return (
                        <TouchableOpacity
                            style={{ paddingRight: 8 }}
                            onPress={() => navigation.openDrawer()}
                        >
                            <Icon
                                name="menu"
                                color="#FFF"
                                size={24}
                                style={{ marginLeft: 15 }}
                            />
                        </TouchableOpacity>
                    )
                },
            })}
        >
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="PointsTable" component={PointsTable} />
            <Stack.Screen name="Fixtures" component={Fixtures} />
            <Stack.Screen name="Auction" component={Auction} />
            <Stack.Screen name="Records" component={Records} />
            <Stack.Screen name="Venues" component={Venues} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="DetailScore" component={DetailScore} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />
            <Stack.Screen
                name="DetailMatchTopNav"
                component={DetailMatchTopNav}
            />
            <Stack.Screen name="SeriesMatches" component={SeriesMatches} />
            <Stack.Screen name="Winners" component={Winners} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            <Stack.Screen name="tNc" component={tNc} />
            <Stack.Screen name="Privacy" component={Privacy} />
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

const styles = StyleSheet.create({
    image: {
        height: 28,
        width: 28,
        resizeMode: 'contain',
        marginTop: 0,
    },
    iplLive2021: {
        fontSize: 18,
        color: '#FFFFFF',
        backgroundColor: 'transparent',
    },
})

export { MainStackNavigator, ContactStackNavigator }
