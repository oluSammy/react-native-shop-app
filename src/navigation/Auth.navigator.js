import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from '../screens/user/AuthScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="login" component={AuthScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator
