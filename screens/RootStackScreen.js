import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FrontScreen from "./FrontScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="FrontScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FrontScreen" component={FrontScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;

const styles = StyleSheet.create({});
