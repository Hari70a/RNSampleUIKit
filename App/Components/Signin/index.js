import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { colors, images, showAlert } from "../../Config";
import InputField from "../Shared/InputField";
import TextButton from "../Shared/Buttons/TextButton/";
import CustomButton from "../Shared/Buttons/CustomButton/";
import CustomValidation from "../Shared/CustomValidation";

import {
  areFieldsFilled,
  isFollowsPwdPolicy,
  isEmailValid
} from "../../Validations";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isEmailInvalid: false,
      password: "",
      isPwdInvalid: false,
      disabled: true
    };
  }

  /*Set the button state disabled based on conditions
    1.all inputs should be areFieldsFilled.
    2.validate email and password 
    Set negation of condition 1 & 2 to disabled state*/
  isButtonDisabled = () =>
    !(
      areFieldsFilled(this.state.email, this.state.password) &&
      (isEmailValid(this.state.email) &&
        isFollowsPwdPolicy(this.state.password))
    );

  onChangeTxt = field => {
    const keys = Object.keys(field);
    this.setState(field);
    if (keys[0] == "email")
      this.setState({ isEmailInvalid: !isEmailValid(this.state.email) });
    else
      this.setState({
        isPwdInvalid: !isFollowsPwdPolicy(this.state.password)
      });
    this.setState({
      disabled: this.isButtonDisabled
    });
  };

  navigateToSignUp = () => {
    this.props.navigation.navigate("Signup");
  };

  onLogin = () => {
    this.props.navigation.navigate("Home");
    // if (areFieldsFilled(this.state.email, this.state.password)) {
    //   this.props.navigation.navigate("Home");
    // } else showAlert("Please fill email and password");
  };

  render() {
    console.log(this.state, "state Render@@@@");
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={images.logo} />
        </View>
        <View style={{ flex: 0.6 }}>
          <View style={{ marginLeft: 30 }}>
            <Text style={styles.loginHeaderTxt}>Login to your account</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <InputField
              label={"email"}
              placeholder={"Email"}
              keyboardType={"email-address"}
              fieldData={this.state.email}
              onChangeTxt={this.onChangeTxt}
            />
            {this.state.isEmailInvalid && (
              <CustomValidation message={"Please enter valid email"} />
            )}
            <InputField
              label={"password"}
              placeholder={"Password"}
              fieldData={this.state.password}
              onChangeTxt={this.onChangeTxt}
            />
            {this.state.isPwdInvalid && (
              <CustomValidation
                message={
                  "Please fill valid password (Min 6 character and atleast one capital letter)"
                }
              />
            )}
            <CustomButton
              title={"Login"}
              onPress={this.state.disabled ? null : this.onLogin}
              disabled={this.state.disabled}
            />
            <View style={styles.textLinks}>
              <Text style={styles.fieldTxt}>Don’t have an account?</Text>
              <TextButton title={"Signup"} onPress={this.navigateToSignUp} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  logoContainer: {
    flex: 0.4,
    ...center
  },
  fieldTxt: {
    color: colors.steelColor,
    textAlign: "center",
    fontSize: 16,
    marginTop: 5
  },
  loginHeaderTxt: {
    fontSize: 17,
    color: colors.steelColorqq
  },
  textLinks: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25
  }
});
