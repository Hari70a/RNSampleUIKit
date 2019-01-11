import React, { Component } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { colors } from "../../../../Config";

export default class CustomButton extends Component {
  render() {
    console.log(this.props, "Porps @@!!!!");
    return (
      <TouchableHighlight
        style={[
          styles.btnContainer,
          { opacity: this.props.disabled ? 0.4 : 1 }
        ]}
        underlayColor={colors.btnColor}
        onPress={this.props.onPress}
      >
        <Text style={styles.title}>{this.props.title} </Text>
      </TouchableHighlight>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.btnColor,
    marginHorizontal: 30,
    height: 50,
    borderRadius: 25,
    marginTop: 15,
    ...center
  },
  title: {
    color: colors.bgColor,
    fontSize: 16
  }
});
