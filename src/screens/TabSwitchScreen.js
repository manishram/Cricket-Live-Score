import * as React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    RefreshControl,
    ScrollView,
} from 'react-native'
import { TabView } from 'react-native-tab-view'
import Today from './Today'
import { TabBar } from 'react-native-tab-view'
import MatchLists from './MatchLists'
import Upcoming from './Upcoming'
const initialLayout = { width: Dimensions.get('window').width }

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
}
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const today = new Date()

let day1 = new Date()
day1.setDate(today.getDate() + 1)

let day2 = new Date()
day2.setDate(today.getDate() + 2)

let day3 = new Date()
day3.setDate(today.getDate() + 3)

let day_1 = new Date()
day_1.setDate(today.getDate() - 1)

let day_2 = new Date()
day_2.setDate(today.getDate() - 2)

let day_3 = new Date()
day_3.setDate(today.getDate() - 3)

function TabSwitchScreen({ navigation }) {
    const [index, setIndex] = React.useState(3)
    const [routes] = React.useState([
        {
            key: '1',
            title: `${dayNames[day_3.getDay()]} ${day_3.getDate()}`,
        },
        {
            key: '2',
            title: `${dayNames[day_2.getDay()]} ${day_2.getDate()}`,
        },
        {
            key: '3',
            title: `${dayNames[day_1.getDay()]} ${day_1.getDate()}`,
        },
        { key: '4', title: 'Today' },
        {
            key: '5',
            title: `${dayNames[day1.getDay()]} ${day1.getDate()}`,
        },
        {
            key: '6',
            title: `${dayNames[day2.getDay()]} ${day2.getDate()}`,
        },
        {
            key: '7',
            title: `${dayNames[day3.getDay()]} ${day3.getDate()}`,
        },
    ])

    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => setRefreshing(false))
    }, [])

    const renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return (
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <MatchLists
                                navigation={navigation}
                                startDate={day_3.toISOString().slice(0, 10)}
                                endDate={day_3.toISOString().slice(0, 10)}
                            />
                        </ScrollView>
                    </View>
                )
            case '2':
                return (
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <MatchLists
                                navigation={navigation}
                                startDate={day_2.toISOString().slice(0, 10)}
                                endDate={day_2.toISOString().slice(0, 10)}
                            />
                        </ScrollView>
                    </View>
                )
            case '3':
                return (
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <MatchLists
                                navigation={navigation}
                                startDate={day_1.toISOString().slice(0, 10)}
                                endDate={day_1.toISOString().slice(0, 10)}
                            />
                        </ScrollView>
                    </View>
                )
            case '4':
                return (
                    <Today navigation={navigation} />
                    // <View>
                    //     <ScrollView
                    //         showsVerticalScrollIndicator={false}
                    //         refreshControl={
                    //             <RefreshControl
                    //                 refreshing={refreshing}
                    //                 onRefresh={onRefresh}
                    //             />
                    //         }
                    //     >
                    //         <Today navigation={navigation} />
                    //     </ScrollView>
                    // </View>
                )
            case '5':
                return (
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <MatchLists
                                navigation={navigation}
                                startDate={day1.toISOString().slice(0, 10)}
                                endDate={day1.toISOString().slice(0, 10)}
                            />
                        </ScrollView>
                    </View>
                )
            case '6':
                return (
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <MatchLists
                                navigation={navigation}
                                startDate={day2.toISOString().slice(0, 10)}
                                endDate={day2.toISOString().slice(0, 10)}
                            />
                        </ScrollView>
                    </View>
                )
            case '7':
                return (
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <MatchLists
                                navigation={navigation}
                                startDate={day3.toISOString().slice(0, 10)}
                                endDate={day3.toISOString().slice(0, 10)}
                            />
                        </ScrollView>
                    </View>
                )
            default:
                return null
        }
    }
    return (
        <TabView
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    indicatorStyle={styles.indicator}
                    style={styles.tabbar}
                    labelStyle={styles.label}
                    tabStyle={styles.tabStyle}
                    scrollEnabled={true}
                />
            )}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
                backgroundColor: 'rgba(240, 240, 240, 1)',
                elevation: 0,
            }}
        />
    )
}
const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: '#0024A5',
    },
    indicator: {
        backgroundColor: '#DA010E',
        height: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    label: {
        fontWeight: '400',
    },
    tabStyle: {
        width: 'auto',
    },
})
export default TabSwitchScreen
