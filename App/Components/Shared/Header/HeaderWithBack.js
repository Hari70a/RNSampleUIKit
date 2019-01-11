import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { colors } from "../../../Config";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.homeHeaderContainer}>
        <TouchableOpacity
          style={styles.backViewContainer}
          onPress={() => this.props.onPressBack()}
        >
          <Ionicons
            name="ios-arrow-back"
            size={33}
            style={{ color: colors.steelColor }}
          />
        </TouchableOpacity>
        <View style={styles.homeHeaderView}>
          <Text style={styles.homeHeaderText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  homeHeaderContainer: {
    height: 55,
    backgroundColor: colors.bgColor,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: Platform.OS == "ios" ? 12 : 0,
    marginVertical: 15
  },
  backViewContainer: {
    flex: 0.2,
    height: 55,
    ...center
  },
  homeHeaderText: {
    color: colors.txtColor,
    fontSize: 34
  },
  homeHeaderView: {
    flex: 0.8
  },
  homeIconView: {
    flex: 0.1,
    padding: 10,
    ...center
  },
  filterbyStyle: {
    flex: 0.5,
    marginRight: 5,
    padding: 10,
    ...center
  }
});
