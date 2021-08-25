import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Svg, { Ellipse } from 'react-native-svg'

function CommentaryBox(props) {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.rect4Stack}>
                <View style={styles.rect4}>
                    <View style={styles.rect5Filler}>
                        <View style={styles.endOfOver15Row}>
                            <Text style={styles.endOfOver15}>
                                End of Over 15
                            </Text>
                            <View style={styles.ellipse5Stack}>
                                <Svg
                                    viewBox="0 0 15.47 15.05"
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
                        <View style={styles.rect5}></View>
                        <View style={styles.innerDataBox}>
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
                                        <Text style={styles.loremIpsum6}>
                                            0
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.text}>
                                    Lorem ipsum, or lipsum as it is sometimes
                                    known, is dummy text used in laying out
                                    print, graphic or web designs.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    rect4: {
        top: 0,
        left: 1,
        width: '100%',
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
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    rect5: {
        width: '100%',
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
        left: 4,
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
        left: 4,
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
        left: 3,
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
        left: 4,
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
        left: 4,
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
        left: 4,
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
        marginLeft: 210,
    },
    batsman6Row: {
        top: 10,
        left: 18,
        right: 20,
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
        marginLeft: 210,
    },
    batsman7Row: {
        top: 30,
        left: 18,
        right: 20,
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
        marginLeft: 213,
    },
    bowler2Row: {
        top: 50,
        left: 18,
        right: 22,
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
        left: 4,
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
        fontFamily: 'inter-500',
        color: '#121212',
        fontSize: 12,
        marginLeft: 15,
        marginTop: 3,
        width: '90%',
    },
    endOfOver16ColumnRow: {
        top: 85,
        left: 14,
        width: 300,
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
        left: 4,
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
        left: 4,
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
    rect4Stack: {
        width: '100%',
        height: 273,
    },
})

export default CommentaryBox
