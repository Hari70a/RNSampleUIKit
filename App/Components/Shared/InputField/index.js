import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../../Config";

export default class InputField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.fieldData}
          autoCapitalize={"none"}
          placeholderColor={colors.placeholderColor}
          secureTextEntry={this.props.placeholder == "Password" ? true : false}
          placeholder={this.props.placeholder}
          onChangeText={txt => {
            console.log(txt, this.props, "txt");
            this.props.onChangeTxt({ [this.props.label]: txt });
          }}
          keyboardType={
            this.props.keyboardType == "email-address"
              ? this.props.keyboardType
              : "default"
          }
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    elevation: 2,
    margin: 15
  },
  input: {
    paddingLeft: 20,
    height: 50
  }
});
