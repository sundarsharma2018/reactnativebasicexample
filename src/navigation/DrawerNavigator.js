import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { StackNavigator } from "./StackNavigator";
//import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contact" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
