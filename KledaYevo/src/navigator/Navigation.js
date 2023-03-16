import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Forceupdate from '../screens/ForceupdateScreen';
import NotLoginScreen from '../screens/NotLoginScreen';

const Stack = createNativeStackNavigator();

const screenOptionStyle = { 
    headerShown: false,
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Forceupdate" component={Forceupdate} />
                <Stack.Screen name="NotLoginScreen" component={NotLoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>  
    )
}
