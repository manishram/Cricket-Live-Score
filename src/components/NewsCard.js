import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import InterstitialAd from './InterstitialAd'

function NewsCard(props) {
    const navigation = useNavigation()

    let featuredLabel = (
        <View style={styles.featuredLabel}>
            <View style={styles.labelBox}>
                <Text style={styles.featured}>Featured</Text>
            </View>
        </View>
    )

    let image = props.newsData.image
    let title = props.newsData.title
    let description = props.newsData.description
    let news_body = props.newsData.news_body
    let isFeatured = props.newsData.featured
    function onNewsCardPress() {
        navigation.navigate('NewsDetail', {
            title: title,
            image: image,
            newsBody: news_body,
        })

        windows.InterstitialAdComponent.showAd()
    }
    return (
        <View style={styles.container}>
            <View style={styles.newsBodyStack}>
                <View style={styles.newsBody}>
                    <TouchableOpacity onPress={() => onNewsCardPress()}>
                        <View style={styles.newsRect}>
                            {isFeatured == 1 ? featuredLabel : null}

                            <View style={styles.imageRow}>
                                <Image
                                    source={{ uri: image }}
                                    resizeMode="contain"
                                    style={styles.image}
                                ></Image>
                                <View style={styles.newsTextBody}>
                                    <Text
                                        numberOfLines={2}
                                        style={styles.newsTitle}
                                    >
                                        {title}
                                    </Text>

                                    <View style={styles.textStack}>
                                        <Text
                                            numberOfLines={5}
                                            style={styles.text}
                                        >
                                            {description}
                                        </Text>
                                        <Text style={styles.newsTitme}>{}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },

    newsBody: {
        top: 7,
        left: 0,
        width: '100%',
        height: 125,
        position: 'absolute',
    },
    newsRect: {
        width: '100%',
        height: 125,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    image: {
        width: 166,
        height: 100,
        marginTop: -5,
    },
    newsTitle: {
        fontFamily: 'inter-600',
        color: 'rgba(0,27,121,1)',
        fontSize: 12,
        marginTop: -5,
    },
    text: {
        top: 0,
        left: 0,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        fontSize: 10,
    },
    newsTitme: {
        top: 70,
        left: 112,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(74,74,74,1)',
        fontSize: 8,
        marginTop: -7,
    },
    textStack: {
        width: 170,
        height: 80,
        marginTop: 6,
    },
    newsTextBody: {
        width: 170,
    },
    imageRow: {
        height: 1,
        flexDirection: 'row',
        marginTop: 16,
        marginRight: 3,
    },
    featuredLabel: {
        top: 0,
        left: 289,
        width: 50,
        height: 15,
        marginTop: -5,
        position: 'absolute',
    },
    labelBox: {
        width: 50,
        height: 15,
        backgroundColor: 'rgba(214,167,0,1)',
        borderRadius: 10,
    },
    featured: {
        fontFamily: 'inter-600',
        color: 'rgba(255,255,255,1)',
        fontSize: 8,
        marginTop: 2,
        marginLeft: 8,
    },
    newsBodyStack: {
        width: '100%',
        height: 132,
        marginTop: -1,
    },
})

export default NewsCard
