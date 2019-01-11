import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../../Config";

export default class TextButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPress()}
      >
        <Text style={styles.fieldTxt}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  fieldTxt: {
    color: colors.steelColor,
    textAlign: "center",
    fontSize: 16
  }
});
