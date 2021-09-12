import React, { useEffect } from 'react'
import { Text, ScrollView, StyleSheet, BackHandler } from 'react-native'
import InterstitialAd from '../components/InterstitialAd'

function tNc() {
    const backAction = () => {
        window.InterstitialAdComponent.showAd()
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction)

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction)
    }, [])
    return (
        <ScrollView style={styles.container}>
            <InterstitialAd />
            <Text style={{ fontWeight: '700', alignSelf: 'center' }}>
                Terms and Conditions
            </Text>
            <Text>
                This page states the Terms and Condition under which you
                (Visitor) may visit this App. Please read this page carefully………
                CricScore is a cricket score and news application. We do not
                support or promote betting/gambling legal or illegal. You are
                free to proceed on any advertisement related to this, we request
                you to proceed on such advertisement of your own free will. We
                are not responsible if betting is not legal in your
                country/state and you use CricScore for any kind of illegal
                activity. The app is not for betting or supporting, this is
                meant for fun and entertainment purpose.
            </Text>
            <Text>Use of Content</Text>
            <Text>
                The use of properties of the App like app logo, app name except
                as provided in these terms and conditions or in the app content
                is strictly prohibited. You may not sell or modify the content
                of this application or reproduce, display, publicly perform,
                distribute or otherwise use the materials in any way for any
                public or commercial purpose without the respective
                organisation’s or entity’s written permission
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default tNc
