import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "../screens/Home";
// import About from "../screens/About";
// import Contact from "../screens/Contact";
import { Dashboard, LoginScreen, RegisterScreen, StartScreen } from "../screens";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

const Stack = createStackNavigator();

// const screenOptionStyle = {
//   headerStyle: {
//     backgroundColor: "#9AC4F8",
//   },
//   headerTintColor: "white",
//   headerBackTitle: "Back",
  
// };

// const MainStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="About" component={About} />
//     </Stack.Navigator>
//   );
// };

const StackNavigator = () => {
  return (
    // <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Navigator  initialRouteName="StartScreen"
    screenOptions={{
      headerShown: false,
     }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
    </Stack.Navigator>
  );
};

export { StackNavigator };
