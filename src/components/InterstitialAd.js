import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { InterstitialAdManager } from 'react-native-fbads'
import { InterstitialAdPlacementId } from './Variables'

const { width } = Dimensions.get('window')

export default class InterstitialAd extends Component {
    constructor() {
        super()
        window.InterstitialAdComponent = this
    }
    render() {
        return null
    }

    showAd() {
        InterstitialAdManager.showAd(InterstitialAdPlacementId)
            .then(() => {})
            .catch(() => {})
    }
}
