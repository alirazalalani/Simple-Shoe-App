import { View, ActivityIndicator, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./screens/RootStackScreen";
import { AuthContext } from "./component/context";
import React, { useMemo, useReducer, useEffect } from "react";

import MainTabScreen from "./screens/MainTabScreen";
export default function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.username,
          isLoading: false,
          userToken: action.token,
        };
      case "LOGOUT":
        return {
          ...prevState,
          isLoading: action.isLoading,
          userToken: null,
          userName: null,
        };
      case "REGISTER":
        return {
          ...prevState,
          isLoading: false,
          userName: action.username,
          userToken: action.token,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (foundUser) => {
        const userToken = String(foundUser.userToken);
        const userName = foundUser.username;
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGIN", username: userName, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }

        dispatch({ type: "LOGOUT", isLoading: false });
      },
    }),
    []
  );
  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken", userToken);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar style="light-content" />
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <MainTabScreen />
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
