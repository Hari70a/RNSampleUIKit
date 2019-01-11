import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { colors, showAlert } from "../../Config";
import InputField from "../Shared/InputField";
import CustomButton from "../Shared/Buttons/CustomButton";
import CustomValidation from "../Shared/CustomValidation";
import TextButton from "../Shared/Buttons/TextButton";
import HeaderWithBack from "../Shared/Header/HeaderWithBack";
import {
  areFieldsFilled,
  isFollowsPwdPolicy,
  isEmailValid,
  trimText
} from "../../Validations";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      isFnameInvalid: false,
      isLnameInvalid: false,
      isEmailInvalid: false,
      isPwdInvalid: false,
      disabled: true
    };
  }

  setEachFieldValidation = key => {
    switch (key) {
      case "firstname":
        this.setState({
          isFnameInvalid:
            trimText(this.state.firstname).indexOf(" ") != 0 ? false : true
        });
        break;
      case "lastname":
        this.setState({
          isLnameInvalid:
            trimText(this.state.lastname).indexOf(" ") != 0 ? false : true
        });
        break;
      case "email":
        this.setState({
          isEmailInvalid: !isEmailValid(this.state.email)
        });
        break;
      case "password":
        this.setState({
          isPwdInvalid: !isFollowsPwdPolicy(this.state.password)
        });
        break;
      default:
      // code block
    }
  };

  onChangeTxt = field => {
    this.setState(field);
    const keys = Object.keys(field);
    this.setEachFieldValidation(keys[0]);
    this.setState({ disabled: this.isButtonDisabled() });
  };

  moveBack = () => {
    this.props.navigation.goBack();
  };

  isButtonDisabled = () =>
    !(
      areFieldsFilled(
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.password
      ) &&
      isEmailValid(this.state.email) &&
      isFollowsPwdPolicy(this.state.password) &&
      trimText(this.state.firstname).indexOf(" ") != 0 &&
      trimText(this.state.lastname).indexOf(" ") != 0
    );

  onSignup = () => {
    this.props.navigation.navigate("Home");
    // if (
    //   areFieldsFilled(
    //     this.state.firstname,
    //     this.state.lastname,
    //     this.state.email,
    //     this.state.password
    //   )
    // ) {
    //   this.props.navigation.navigate("Home");
    // } else showAlert("Please fill all the fields");
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderWithBack onPressBack={this.moveBack} title={"Create account"} />
        <ScrollView>
          <View style={styles.welcomeContain}>
            <Text style={styles.loginHeaderTxt}>Welcome to Yo!</Text>
          </View>
          <View style={{ flex: 0.8 }}>
            <InputField
              label={"firstname"}
              placeholder={"First Name"}
              fieldData={this.state.firstname}
              onChangeTxt={this.onChangeTxt}
            />
            {this.state.isFnameInvalid && (
              <CustomValidation message={"Please enter valid first name"} />
            )}
            <InputField
              label={"lastname"}
              placeholder={"Last Name"}
              fieldData={this.state.lastname}
              onChangeTxt={this.onChangeTxt}
            />
            {this.state.isLnameInvalid && (
              <CustomValidation message={"Please enter valid last name"} />
            )}
            <InputField
              label={"email"}
              placeholder={"Email"}
              keyboardType={"email"}
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
                  "Please enter valid password(Min 6 character and atleast one capital letter)"
                }
              />
            )}
            <CustomButton
              title={"Sign up"}
              onPress={this.state.disabled ? null : this.onSignup}
              disabled={this.state.disabled}
            />
            <View style={styles.textLinks}>
              <Text style={styles.fieldTxt}>Already have an account?</Text>
              <TextButton title={"Login"} onPress={this.moveBack} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  loginHeaderTxt: {
    fontSize: 17,
    color: colors.steelColorqq
  },
  fieldTxt: {
    color: colors.steelColor,
    textAlign: "center",
    fontSize: 16,
    marginTop: 5
  },
  welcomeContain: {
    flex: 0.1,
    marginTop: 15,
    marginLeft: 30
  },
  textLinks: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25
  }
});
