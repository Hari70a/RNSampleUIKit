import { Alert } from "react-native";

export const colors = {
  bgColor: "#ffffff",
  steelColor: "#778087",
  placeholderColor: "#AAB2B7",
  txtColor: "#171F24",
  headerColor: "#ff0800",
  shadeColor: "rgba(0,0,0,0.4)",
  btnColor: "#ad42fe",
  notifyColor: "#ff0800"
};

export const showAlert = message => {
  Alert.alert("", message);
};

export const images = {
  logo: require("../Assets/Images/yo.png")
};
