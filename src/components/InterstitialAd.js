import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { AdMobInterstitial } from 'react-native-admob'
import { InterstitialAdUnitId } from './Variables'

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
        AdMobInterstitial.setAdUnitID(InterstitialAdUnitId)
        AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId])
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd())
    }
}
