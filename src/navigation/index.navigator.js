import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShopNavigation from "./shop.navigator";
import OrderNavigator from "./order.navigator";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import colors from "../constants/colors";

const DrawerNavigator = createDrawerNavigator();

const isAndroid = Platform.OS === "android";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen
          name="Products"
          component={ShopNavigation}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <Ionicons
                name={isAndroid ? "md-create" : "ios-create"}
                size={23}
                color={colors.primary}
              />
            ),
          }}
        />
        <DrawerNavigator.Screen
          name="Orders"
          component={OrderNavigator}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <Ionicons
                name={isAndroid ? "md-list" : "ios-list"}
                size={23}
                color={colors.primary}
              />
            ),
          }}
        />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
