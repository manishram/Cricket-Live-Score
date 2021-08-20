import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'
import TopHeader from '../components/TopHeader'
import MaterialHeader4 from '../components/TopHeaderBox'
import MatchCard from '../components/MatchCard'
import Svg, { Ellipse } from 'react-native-svg'

function DetailScore(props) {
    return (
        <View style={styles.container}>
            <MatchCard style={styles.matchCard}></MatchCard>
            <View style={styles.rect}>
                <View style={styles.batsmanRow}>
                    <Text style={styles.batsman}>Batsman</Text>
                    <Text style={styles.r5}>R</Text>
                    <Text style={styles.b2}>B</Text>
                    <Text style={styles.b3}>4s</Text>
                    <Text style={styles.b4}>6s</Text>
                    <Text style={styles.sr}>SR</Text>
                </View>
                <View style={styles.rect2}></View>
                <View style={styles.batsman3Row}>
                    <Text style={styles.batsman3}>Batsman</Text>
                    <Text style={styles.r6}>R</Text>
                    <Text style={styles.b7}>B</Text>
                    <Text style={styles.b6}>4s</Text>
                    <Text style={styles.b5}>6s</Text>
                    <Text style={styles.sr1}>SR</Text>
                </View>
                <View style={styles.batsman4Row}>
                    <Text style={styles.batsman4}>Batsman</Text>
                    <Text style={styles.r7}>R</Text>
                    <Text style={styles.b8}>B</Text>
                    <Text style={styles.b9}>4s</Text>
                    <Text style={styles.b10}>6s</Text>
                    <Text style={styles.sr2}>SR</Text>
                </View>
                <View style={styles.bowlerRow}>
                    <Text style={styles.bowler}>Bowler</Text>
                    <Text style={styles.r8}>R</Text>
                    <Text style={styles.b13}>B</Text>
                    <Text style={styles.b12}>4s</Text>
                    <Text style={styles.b11}>6s</Text>
                    <Text style={styles.sr3}>SR</Text>
                </View>
                <View style={styles.rect3}></View>
                <View style={styles.batsman5Row}>
                    <Text style={styles.batsman5}>Batsman</Text>
                    <Text style={styles.r9}>R</Text>
                    <Text style={styles.b14}>B</Text>
                    <Text style={styles.b15}>4s</Text>
                    <Text style={styles.b16}>6s</Text>
                    <Text style={styles.sr4}>SR</Text>
                </View>
            </View>
            <View style={styles.rect4Stack}>
                <View style={styles.rect4}>
                    <View style={styles.rect5}></View>
                    <View style={styles.rect5Filler}>
                        <View style={styles.endOfOver15Row}>
                            <Text style={styles.endOfOver15}>
                                End of Over 15
                            </Text>
                            <View style={styles.ellipse5Stack}>
                                <Svg
                                    viewBox="0 0 15.05 15.05"
                                    style={styles.ellipse5}
                                >
                                    <Ellipse
                                        strokeWidth={0}
                                        fill="rgba(196,196,196,1)"
                                        cx={8}
                                        cy={8}
                                        rx={8}
                                        ry={8}
                                    ></Ellipse>
                                </Svg>
                                <Text style={styles.loremIpsum}>0</Text>
                            </View>
                            <View style={styles.ellipseStack}>
                                <Svg
                                    viewBox="0 0 15.05 15.05"
                                    style={styles.ellipse}
                                >
                                    <Ellipse
                                        strokeWidth={0}
                                        fill="rgba(1,34,154,1)"
                                        cx={8}
                                        cy={8}
                                        rx={8}
                                        ry={8}
                                    ></Ellipse>
                                </Svg>
                                <Text style={styles.loremIpsum1}>2</Text>
                            </View>
                            <View style={styles.ellipse1Stack}>
                                <Svg
                                    viewBox="0 0 15.05 15.05"
                                    style={styles.ellipse1}
                                >
                                    <Ellipse
                                        strokeWidth={0}
                                        fill="rgba(1,34,154,1)"
                                        cx={8}
                                        cy={8}
                                        rx={8}
                                        ry={8}
                                    ></Ellipse>
                                </Svg>
                                <Text style={styles.loremIpsum2}>4</Text>
                            </View>
                            <View style={styles.ellipse2Stack}>
                                <Svg
                                    viewBox="0 0 15.05 15.05"
                                    style={styles.ellipse2}
                                >
                                    <Ellipse
                                        strokeWidth={0}
                                        fill="rgba(196,196,196,1)"
                                        cx={8}
                                        cy={8}
                                        rx={8}
                                        ry={8}
                                    ></Ellipse>
                                </Svg>
                                <Text style={styles.loremIpsum3}>0</Text>
                            </View>
                            <View style={styles.ellipse3Stack}>
                                <Svg
                                    viewBox="0 0 15.05 15.05"
                                    style={styles.ellipse3}
                                >
                                    <Ellipse
                                        strokeWidth={0}
                                        fill="rgba(1,34,154,1)"
                                        cx={8}
                                        cy={8}
                                        rx={8}
                                        ry={8}
                                    ></Ellipse>
                                </Svg>
                                <Text style={styles.loremIpsum4}>6</Text>
                            </View>
                            <View style={styles.ellipse4Stack}>
                                <Svg
                                    viewBox="0 0 15.05 15.05"
                                    style={styles.ellipse4}
                                >
                                    <Ellipse
                                        strokeWidth={0}
                                        fill="rgba(196,196,196,1)"
                                        cx={8}
                                        cy={8}
                                        rx={8}
                                        ry={8}
                                    ></Ellipse>
                                </Svg>
                                <Text style={styles.loremIpsum5}>0</Text>
                            </View>
                        </View>
                        <View style={styles.batsman6Row}>
                            <Text style={styles.batsman6}>Batsman</Text>
                            <Text style={styles.sr5}>10(22)</Text>
                        </View>
                        <View style={styles.batsman7Row}>
                            <Text style={styles.batsman7}>Batsman</Text>
                            <Text style={styles.sr9}>12(10)</Text>
                        </View>
                        <View style={styles.bowler2Row}>
                            <Text style={styles.bowler2}>Bowler</Text>
                            <Text style={styles.sr7}>10-2-5-6</Text>
                        </View>
                        <View style={styles.endOfOver16ColumnRow}>
                            <View style={styles.endOfOver16Column}>
                                <Text style={styles.endOfOver16}>14.6</Text>
                                <View style={styles.ellipse6Stack}>
                                    <Svg
                                        viewBox="0 0 15.05 15.05"
                                        style={styles.ellipse6}
                                    >
                                        <Ellipse
                                            strokeWidth={0}
                                            fill="rgba(196,196,196,1)"
                                            cx={8}
                                            cy={8}
                                            rx={8}
                                            ry={8}
                                        ></Ellipse>
                                    </Svg>
                                    <Text style={styles.loremIpsum6}>0</Text>
                                </View>
                            </View>
                            <Text style={styles.text}>
                                Lorem ipsum, or lipsum as it is sometimes known,
                                is dummy text used in laying out print, graphic
                                or web designs.
                            </Text>
                        </View>
                        <View style={styles.endOfOver17ColumnRow}>
                            <View style={styles.endOfOver17Column}>
                                <Text style={styles.endOfOver17}>14.6</Text>
                                <View style={styles.loremIpsum7Stack}>
                                    <Text style={styles.loremIpsum7}>0</Text>
                                    <Svg
                                        viewBox="0 0 15.05 15.05"
                                        style={styles.ellipse7}
                                    >
                                        <Ellipse
                                            strokeWidth={0}
                                            fill="rgba(1,34,154,1)"
                                            cx={8}
                                            cy={8}
                                            rx={8}
                                            ry={8}
                                        ></Ellipse>
                                    </Svg>
                                    <Text style={styles.loremIpsum8}>6</Text>
                                </View>
                            </View>
                            <Text style={styles.text1}>
                                Lorem ipsum, or lipsum as it is sometimes known,
                                is dummy text used in laying out print, graphic
                                or web designs.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rect6}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,240,240,1)',
        padding: 10,
    },
    topHeader: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 375,
        height: 120,
    },
    materialHeader4: {
        position: 'absolute',
        left: 0,
        top: 32,
        width: 375,
        height: 56,
    },
    topHeaderStack: {
        width: 375,
        height: 120,
        marginTop: -1,
    },
    matchCard: {
        width: 346,
        height: 140,
        backgroundColor: '#fff',
        marginTop: 22,
        alignSelf: 'center',
    },
    rect: {
        width: 346,
        height: 140,
        backgroundColor: 'rgba(249,249,249,1)',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 12,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginTop: 19,
        marginLeft: 14,
    },
    batsman: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
    },
    r5: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 78,
    },
    b2: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 24,
    },
    b3: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 30,
    },
    b4: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 28,
    },
    sr: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 27,
    },
    batsmanRow: {
        height: 17,
        flexDirection: 'row',
        marginTop: 6,
        marginLeft: 19,
        marginRight: 19,
    },
    rect2: {
        width: 346,
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 4,
    },
    batsman3: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    r6: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 80,
    },
    b7: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 24,
    },
    b6: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 30,
    },
    b5: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 28,
    },
    sr1: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 27,
    },
    batsman3Row: {
        height: 17,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 18,
        marginRight: 19,
    },
    batsman4: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    r7: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 80,
    },
    b8: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 24,
    },
    b9: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 30,
    },
    b10: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 28,
    },
    sr2: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 27,
    },
    batsman4Row: {
        height: 17,
        flexDirection: 'row',
        marginTop: 3,
        marginLeft: 18,
        marginRight: 19,
    },
    bowler: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
    },
    r8: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 92,
    },
    b13: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 24,
    },
    b12: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 30,
    },
    b11: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 28,
    },
    sr3: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
        marginLeft: 27,
    },
    bowlerRow: {
        height: 17,
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 18,
        marginRight: 19,
    },
    rect3: {
        width: 346,
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 4,
    },
    batsman5: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    r9: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 80,
    },
    b14: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 24,
    },
    b15: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 30,
    },
    b16: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 28,
    },
    sr4: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 27,
    },
    batsman5Row: {
        height: 17,
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: 18,
        marginRight: 19,
    },
    rect4: {
        top: 0,
        left: 1,
        width: 346,
        height: 273,
        position: 'absolute',
        backgroundColor: 'rgba(249,249,249,1)',
        flexDirection: 'row',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 12,
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    rect5: {
        width: 346,
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 28,
    },
    endOfOver15: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
    },
    ellipse5: {
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        position: 'absolute',
    },
    loremIpsum: {
        top: 1,
        left: 5,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    ellipse5Stack: {
        width: 15,
        height: 15,
        marginLeft: 79,
    },
    ellipse: {
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        position: 'absolute',
    },
    loremIpsum1: {
        top: 1,
        left: 5,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    ellipseStack: {
        width: 15,
        height: 15,
        marginLeft: 10,
    },
    ellipse1: {
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        position: 'absolute',
    },
    loremIpsum2: {
        top: 1,
        left: 4,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    ellipse1Stack: {
        width: 15,
        height: 15,
        marginLeft: 10,
    },
    ellipse2: {
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        position: 'absolute',
    },
    loremIpsum3: {
        top: 1,
        left: 5,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    ellipse2Stack: {
        width: 15,
        height: 15,
        marginLeft: 9,
    },
    ellipse3: {
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        position: 'absolute',
    },
    loremIpsum4: {
        top: 1,
        left: 5,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    ellipse3Stack: {
        width: 15,
        height: 15,
        marginLeft: 9,
    },
    ellipse4: {
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        position: 'absolute',
    },
    loremIpsum5: {
        top: 1,
        left: 5,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    ellipse4Stack: {
        width: 15,
        height: 15,
        marginLeft: 11,
    },
    endOfOver15Row: {
        top: 8,
        left: 18,
        right: 18,
        height: 17,
        position: 'absolute',
        flexDirection: 'row',
    },
    batsman6: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    sr5: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 211,
    },
    batsman6Row: {
        top: 42,
        left: 18,
        right: 21,
        height: 17,
        position: 'absolute',
        flexDirection: 'row',
    },
    batsman7: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    sr9: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 211,
    },
    batsman7Row: {
        top: 67,
        left: 18,
        right: 21,
        height: 17,
        position: 'absolute',
        flexDirection: 'row',
    },
    bowler2: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
    },
    sr7: {
        fontFamily: 'roboto-regular',
        color: 'rgba(99,99,99,1)',
        marginLeft: 214,
    },
    bowler2Row: {
        top: 92,
        left: 18,
        right: 21,
        height: 17,
        position: 'absolute',
        flexDirection: 'row',
    },
    endOfOver16: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
    },
    ellipse6: {
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        position: 'absolute',
    },
    loremIpsum6: {
        top: 1,
        left: 5,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    ellipse6Stack: {
        width: 15,
        height: 15,
        marginTop: 2,
        marginLeft: 6,
    },
    endOfOver16Column: {
        width: 28,
    },
    text: {
        fontFamily: 'roboto-regular',
        color: '#121212',
        fontSize: 10,
        marginLeft: 13,
        marginTop: 3,
    },
    endOfOver16ColumnRow: {
        top: 134,
        left: 14,
        right: 21,
        height: 34,
        position: 'absolute',
        flexDirection: 'row',
    },
    endOfOver17: {
        fontFamily: 'roboto-500',
        color: 'rgba(0,0,0,1)',
    },
    loremIpsum7: {
        top: 0,
        left: 5,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    ellipse7: {
        top: 4,
        left: 0,
        width: 15,
        height: 15,
        position: 'absolute',
    },
    loremIpsum8: {
        top: 5,
        left: 5,
        position: 'absolute',
        fontFamily: 'roboto-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 10,
    },
    loremIpsum7Stack: {
        width: 15,
        height: 19,
        marginLeft: 6,
    },
    endOfOver17Column: {
        width: 28,
    },
    text1: {
        fontFamily: 'roboto-regular',
        color: '#121212',
        fontSize: 10,
        marginLeft: 13,
        marginTop: 5,
    },
    endOfOver17ColumnRow: {
        top: 177,
        left: 14,
        right: 21,
        height: 36,
        position: 'absolute',
        flexDirection: 'row',
    },
    rect5Filler: {
        flex: 1,
    },
    rect6: {
        top: 118,
        left: 0,
        width: 346,
        height: 1,
        position: 'absolute',
        backgroundColor: '#E6E6E6',
    },
    rect4Stack: {
        width: 347,
        height: 273,
        marginTop: 31,
        marginLeft: 13,
    },
})

export default DetailScore
