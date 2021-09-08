import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'

const NewsDetail = (props) => {
    const title = props.route.params.title
    const image = props.route.params.image
    const body = props.route.params.newsBody

    return (
        <ScrollView
            style={{ flex: 1, padding: 10 }}
            showsVerticalScrollIndicator={false}
        >
            <Text style={{ fontFamily: 'inter-700', textAlign: 'center' }}>
                {title}
            </Text>

            <Image
                source={{
                    uri: `${image}`,
                }}
                style={styles.image}
            ></Image>

            <View style={styles.divider}></View>
            <View>
                <Text
                    style={{
                        fontFamily: 'inter-500',
                        marginTop: 15,
                        marginBottom: 30,
                    }}
                >
                    {body}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        left: 0,
        right: 0,
        width: '100%',
        height: 200,
        marginTop: 20,
    },
    divider: {
        width: '100%',
        height: 1,
        marginTop: 10,
        backgroundColor: '#E6E6E6',
    },
})

export default NewsDetail
