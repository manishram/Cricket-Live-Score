import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Circle({ textValue }) {
    let color = 'red'
    switch (textValue) {
        case 'W':
            color = 'red'
            break
        case 0:
            color = '#ccc'
            break
        case 1:
            color = '#39739d'
            break

        case 2:
            color = '#39739d'
            break

        case 3:
            color = '#39739d'
            break

        case 4:
            color = '#b01dca'
            break

        case 6:
            color = 'green'
            break
        default:
            color = '#ff9800'
    }
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: color, justifyContent: 'center' },
            ]}
        >
            <Text style={styles.text}>{textValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 2,
        marginRight: 2,
    },
    text: {
        fontFamily: 'inter-500',
        fontSize: 10,
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
    },
})

export default Circle
