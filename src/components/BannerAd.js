import React from 'react'
import { View } from 'react-native'
import { BannerView } from 'react-native-fbads'

function BannerAd(props) {
    return (
        <View>
            <BannerView
                placementId={props.id}
                type="standard"
                onPress={() => console.log('click')}
                onLoad={() => console.log('loaded')}
                onError={(err) => console.log('error', err)}
            />
        </View>
    )
}

export default BannerAd
