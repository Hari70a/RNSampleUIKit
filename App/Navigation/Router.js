import { createStackNavigator, createAppContainer } from "react-navigation";

import SignupScreen from "../Components/Signup";
import SigninScreen from "../Components/Signin";
import HomeScreen from "../Components/Home";

const RootStack = createStackNavigator(
  {
    Signin: {
      screen: SigninScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Signup: {
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
      screen: SignupScreen
    },
    Home: {
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Signin"
  }
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
