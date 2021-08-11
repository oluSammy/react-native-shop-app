import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/colors";

import { Platform } from "react-native";
import UserProductScreen from "../screens/user/UserProductScreen";

const isAndroid = Platform.OS === "android";

const AdminStack = createNativeStackNavigator();

const AdminNavigator = () => {
  return (
    <AdminStack.Navigator
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
      <AdminStack.Screen
        name="User Product"
        component={UserProductScreen}
        options={{ title: "Your Products", headerLeft: () => {} }}
      />
    </AdminStack.Navigator>
  );
};

export default AdminNavigator;
