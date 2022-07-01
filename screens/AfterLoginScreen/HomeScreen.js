import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import Lists from "../../List/ShoeList";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../component/context";
import AppLoading from "expo-app-loading";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  AveriaLibre_700Bold,
  AveriaLibre_700Bold_Italic,
} from "@expo-google-fonts/averia-libre";
const HomeScreen = () => {
  const { signOut } = useContext(AuthContext);
  let [fontsLoaded, error] = useFonts({
    AveriaLibre_700Bold,
    AveriaLibre_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  // const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar style="light-content" />
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.imageStyle}
          source={{
            uri: "https://images.pexels.com/photos/3360545/pexels-photo-3360545.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
        >
          <View style={styles.textContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: Dimensions.get("window").width / 20,
                marginHorizontal: 10,
                marginVertical: 20,
              }}
            >
              <TouchableOpacity>
                <MaterialIcons name="menu" size={26} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  signOut();
                }}
              >
                <MaterialIcons name="logout" size={26} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.textStyle}>WANNA KICKS</Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.footerContent}>
        {Lists.map((list) => {
          return (
            <View style={styles.cart} key={list.id}>
              <View style={styles.content}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/nike.png")}
                  />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>Nike</Text>
                    <Text style={{ color: "grey" }}>{list.shoeTitle}</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <Ionicons name="heart" size={24} color="red" />
                </View>
              </View>
              <View style={styles.imageInCart}>
                <Image
                  resizeMode="contain"
                  style={{ width: 200, height: 200 }}
                  source={list.imgURL}
                />
                <TouchableOpacity>
                  <LinearGradient
                    colors={["#d63031", "#ab0101"]}
                    style={styles.addToCart}
                  >
                    <Text style={styles.textSign}>Add To Cart</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        {/* ............... */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width,
    height: 200,
    backgroundColor: "white",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.6,
    height: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textStyle: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "AveriaLibre_700Bold_Italic",
    textAlign: "center",
  },
  footerContent: {
    backgroundColor: "white",
    flex: 2,
    padding: 10,
  },
  cart: {
    marginTop: 30,
    padding: 20,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 250,

    shadowColor: "#000  ",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 15,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageInCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addToCart: {
    width: 120,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textSign: {
    fontWeight: "bold",
    color: "white",
  },
});
