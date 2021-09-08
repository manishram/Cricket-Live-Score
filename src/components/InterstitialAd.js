import React, { Component } from 'react'
import { StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import { Container, Text } from 'native-base'
import { InterstitialAdManager } from 'react-native-fbads'
import { InterstitialAdPlacementId } from './Variables'

const { width } = Dimensions.get('window')

export default class InterstitialAd extends Component {
    constructor() {
        super()
        window.InterstitialAdComponent = this
    }

    showAd() {
        InterstitialAdManager.showAd(InterstitialAdPlacementId)
            .then(() => {})
            .catch(() => {})
    }
}
