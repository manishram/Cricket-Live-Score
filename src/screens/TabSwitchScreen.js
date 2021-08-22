import * as React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Today from './Today'
import DetailScore from './DetailScore'
import { ScrollView } from 'react-native-gesture-handler'
import { TabBar } from 'react-native-tab-view'
import Recent from './Recent'
import Upcoming from './Upcoming'
const initialLayout = { width: Dimensions.get('window').width }

function TabSwitchScreen({ navigation }) {
    const [index, setIndex] = React.useState(1)
    const [routes] = React.useState([
        { key: 'second', title: 'Recent' },
        { key: 'first', title: 'Today' },
        { key: 'third', title: 'Upcoming' },
    ])

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return (
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Today navigation={navigation} />
                        </ScrollView>
                    </View>
                )
            case 'second':
                return (
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Recent navigation={navigation} />
                        </ScrollView>
                    </View>
                )
            case 'third':
                return (
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Upcoming navigation={navigation} />
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
export default TabSwitchScreen
