import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import { Platform } from "react-native";
import Colors from "../constants/colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const ShopStack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

const ShopNavigation = () => {
  return (
    <NavigationContainer>
      <ShopStack.Navigator
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
        <ShopStack.Screen
          name="All Products"
          component={ProductOverviewScreen}
        />
        <ShopStack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
        />
      </ShopStack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;
