import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'

function TopHeaderBox(props) {
    //const navigation = useNavigation()
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.topHeaderRow}>
                <View style={styles.menuIcon}>
                    <TouchableOpacity>
                        {/* <MaterialCommunityIconsIcon
                            name="menu"
                            style={styles.leftIcon}
                            //onPress={() => navigation.openDrawer()}
                        ></MaterialCommunityIconsIcon> */}
                    </TouchableOpacity>
                </View>
                <View style={styles.leftIconButtonRowFiller}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image
                            source={require('../assets/images/logo-sm.png')}
                            style={styles.image}
                        ></Image>
                        <Text numberOfLines={1} style={styles.iplLive2021}>
                            CricScore
                        </Text>
                    </View>
                </View>
                <View style={styles.shareIcon}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#0024A5',
    },
    leftIcon: {
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        fontSize: 25,
    },
    icon: {
        color: 'rgba(255,255,255,1)',
        fontSize: 25,
    },
    topHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        padding: 10,
    },
    iplLive2021: {
        fontSize: 18,
        color: '#FFFFFF',
        backgroundColor: 'transparent',
        flex: 1,
    },
    leftIconButtonRowFiller: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    menuIcon: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    shareIcon: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    image: {
        height: 28,
        width: 28,
        resizeMode: 'contain',
        marginTop: 0,
    },
})

export default TopHeaderBox
