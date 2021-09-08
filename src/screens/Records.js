import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import RequestApi from '../api/RequestApi'

const Records = () => {
    const cid = 118273
    const [record, setRecord] = useState([])
    const getRecord = async () => {
        try {
            const response = await RequestApi.get(
                `competitions/${cid}/stats/batting_most_runs`,
                {
                    params: {},
                }
            )
            setRecord(response.data.response.stats[0])
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getRecord()
    }, [])
    return (
        <View style={{ flexDirection: 'row', padding: 10 }}>
            <View style={styles.container}>
                <Text
                    style={{
                        fontFamily: 'inter-700',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginTop: 10,
                    }}
                >
                    IPL 2021 Records
                </Text>
                <View style={styles.divider}></View>
                <View style={styles.row}>
                    <Text style={styles.left}>Most Runs</Text>
                    <Text style={styles.right}> {record.runs} </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.left}>Highest Strike Rate</Text>
                    <Text style={styles.right}> {record.strike} </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.left}>Most Fours</Text>
                    <Text style={styles.right}> {record.run4} </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.left}>Most Sixes</Text>
                    <Text style={styles.right}> {record.run6} </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.left}>Most Fifties</Text>
                    <Text style={styles.right}> {record.run50} </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.left}>Most Century</Text>
                    <Text style={styles.right}> {record.run100} </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.left}>Total Catches</Text>
                    <Text style={styles.right}> {record.catches} </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.left}>Highest Score</Text>
                    <Text style={styles.right}> {record.highest} </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 4,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 10,
    },
    left: {
        fontFamily: 'inter-600',
        flex: 1,
    },
    right: {
        fontFamily: 'inter-500',
        flex: 1,
    },
})

export default Records
