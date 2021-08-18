import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function NavigationBtn(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconRow}>
          <EntypoIcon name="bar-graph" style={styles.icon}></EntypoIcon>
          <Text style={styles.pointsTable}>Points Table</Text>
          <EntypoIcon name="chevron-right" style={styles.icon3}></EntypoIcon>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 346,
    height: 45,
    backgroundColor: "rgba(249,249,249,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(0,27,121,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  pointsTable: {
    fontFamily: "roboto-500",
    color: "rgba(0,0,0,1)",
    marginLeft: 22,
    marginTop: 5
  },
  icon3: {
    color: "rgba(0,27,121,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginLeft: 180,
    marginTop: 3
  },
  iconRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 22,
    marginTop: 9
  }
});

export default NavigationBtn;
