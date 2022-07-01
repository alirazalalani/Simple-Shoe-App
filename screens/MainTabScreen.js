import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
const ProfileStack = createStackNavigator();
import { Ionicons } from "@expo/vector-icons";
import EditAbout from "./AfterLoginScreen/EditAbout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();
import HomeScreen from "./AfterLoginScreen/HomeScreen";
import CartItem from "./AfterLoginScreen/CartItem";
import AboutScreen from "./AfterLoginScreen/AboutScreen";
import ExploreScreen from "./AfterLoginScreen/ExploreScreen";
const MainTabScreen = () => {
  return (
    <Tab.Navigator initialLoginState={"Home"}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarColor: "#d63031",
          tabBarLabel: "Home",
          tabBarIcon: () => <Entypo name="home" size={25} color="white" />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartItem}
        options={{
          tabBarColor: "#ee5253",
          tabBarLabel: "Cart",
          tabBarIcon: () => (
            <Entypo name="shopping-cart" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackScreen}
        options={{
          tabBarColor: "#c23616",
          tabBarLabel: "About",
          tabBarIcon: () => (
            <FontAwesome name="users" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          labelStyle: {
            fontWeight: "bold",
          },
          tabBarColor: "#e84118",
          tabBarLabel: "Explore",
          tabBarIcon: () => (
            <MaterialIcons name="explore" size={25} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const AboutStackScreen = (props) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
        headerTintColor: "#000",
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={AboutScreen}
        options={{
          title: "",
          headerLeft: () => (
            <Ionicons.Button
              name="menu-outline"
              size={25}
              color="black"
              backgroundColor={"white"}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              backgroundColor={"white"}
              name="account-edit"
              size={25}
              color="black"
              onPress={() => props.navigation.navigate("EditAbout")}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditAbout"
        options={{
          title: "Edit Profile",
        }}
        component={EditAbout}
      />
    </ProfileStack.Navigator>
  );
};
