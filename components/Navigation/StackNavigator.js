import { Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDetails } from "../ProductDetail";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductsList } from "../ProductsList";
import { Cart } from "../Cart";
const { Navigator, Screen } = createStackNavigator();
export default function StackNavigator() {
  const navigation = useNavigation();

  return (
    <Navigator initialRouteName="Product">
      <Screen
        options={{ headerShown: false }}
        name="Product "
        component={ProductsList}
      />
      <Screen
        name="Detail"
        component={ProductDetails}
        options={({ route }) => ({
          title: route.params.product.name,
          headerStyle: {
            backgroundColor: "#F6C913",
          },
        })}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={() => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#F6C913",
          },
        })}
      />
    </Navigator>
  );
}
