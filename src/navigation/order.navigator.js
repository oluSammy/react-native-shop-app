import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/colors";
import OrderScreen from "../screens/shop/OrderScreen";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

const OrderStack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? Colors.primary : "#FFFFFF",
        },
        headerTintColor: isAndroid ? "#FFFFFF" : Colors.primary,
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <OrderStack.Screen name="Order" component={OrderScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderNavigator;
