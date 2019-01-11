import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class CustomValidation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.msgTxt}>{this.props.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  msgTxt: {
    color: "red",
    fontSize: 14
  }
});
