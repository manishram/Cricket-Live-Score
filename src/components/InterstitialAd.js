import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { AdEventType, InterstitialAd } from '@react-native-firebase/admob'
import { InterstitialAdUnitId } from './Variables'

const { width } = Dimensions.get('window')

export default class InterstitialAds extends Component {
    constructor() {
        super()
        window.InterstitialAdComponent = this
    }
    render() {
        return null
    }

    showAd() {
        const interstitial = InterstitialAd.createForAdRequest(
            InterstitialAdUnitId,
            {
                requestNonPersonalizedAdsOnly: false,
            }
        )

        interstitial.onAdEvent((type) => {
            if (type === AdEventType.LOADED) {
                interstitial.show()
            }
        })

        interstitial.load()
    }
}
