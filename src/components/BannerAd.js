import React from 'react'
import { View } from 'react-native'
import { bannerAdUnitId } from './Variables'
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob'

function BannerAds(props) {
    console.log(BannerAdSize)
    return (
        <BannerAd
            unitId={bannerAdUnitId}
            size={BannerAdSize.ADAPTIVE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: false,
            }}
            onAdLoaded={() => {
                console.log('Advert loaded')
            }}
            onAdFailedToLoad={(error) => {
                console.error('Advert failed to load: ', error)
            }}
        />
    )
}

export default BannerAds
