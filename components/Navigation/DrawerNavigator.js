import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Cart } from "../Cart";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Products">
      <Drawer.Screen
        name="Products"
        options={() => ({
          headerStyle: {
            backgroundColor: "#F6C913",
            headerTitleAlign: "center",
          },
        })}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Cart"
        options={() => ({
          headerStyle: {
            backgroundColor: "#F6C913",
            headerTitleAlign: "center",
          },
        })}
        component={Cart}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
