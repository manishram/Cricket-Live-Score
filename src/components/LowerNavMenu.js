import * as React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Home from '../screens/Today'
import DetailScore from '../screens/DetailScore'
import { ScrollView } from 'react-native-gesture-handler'
import { TabBar } from 'react-native-tab-view'

const FirstRoute = () => (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Home />
        </ScrollView>
    </View>
)

const SecondRoute = () => (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <DetailScore />
        </ScrollView>
    </View>
)
const ThirdRoute = () => (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <DetailScore />
        </ScrollView>
    </View>
)

const initialLayout = { width: Dimensions.get('window').width }

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
})

function LowerNavMenu() {
    const [index, setIndex] = React.useState(1)
    const [routes] = React.useState([
        { key: 'second', title: 'Recent' },
        { key: 'first', title: 'Today' },
        { key: 'third', title: 'Upcoming' },
    ])

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
            tabBarPosition="bottom"
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
                backgroundColor: '#000',
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
        width: 120,
    },
})
export default LowerNavMenu
