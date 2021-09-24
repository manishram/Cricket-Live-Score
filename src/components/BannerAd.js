import React from 'react'
import { View } from 'react-native'
import { bannerAdUnitId } from './Variables'
import { AdMobBanner } from 'react-native-admob'

function BannerAd(props) {
    return (
        <View>
            <AdMobBanner
                adSize="fullBanner"
                adUnitID={bannerAdUnitId}
                onAdFailedToLoad={(error) => console.error(error)}
            />
        </View>
    )
}

export default BannerAd
