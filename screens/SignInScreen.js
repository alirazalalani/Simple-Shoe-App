import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import Users from "../model/Users";
import React, { useContext, useState } from "react";
import * as Animatable from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../component/context";
const SignInScreen = (props) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    secureTextEntry: true,
    check_textInputChange: false,
    isValidUser: true,
    isValidPass: true,
  });
  const { signIn } = useContext(AuthContext);

  const textChangeHandler = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const passwordHandler = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPass: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPass: false,
      });
    }
  };

  const loginHandler = (username, password) => {
    const foundUser = Users.filter((item) => {
      return username == item.username && password == item.password;
    });
    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert("Wrong Input", "Username or password field cannot be empty", [
        { text: "Okay" },
      ]);
      return;
    }
    if (foundUser.length === 0) {
      Alert.alert(
        "Invalid User",
        "UserName or password doesnot match, please Signup",
        [
          { text: "Okay" },
          {
            text: "Signup",
            // onPress: () => props.navigation.navigate("SignUpScreen"),
          },
        ]
      );
      return;
    }
    signIn(foundUser);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
        </View>
      </View>
      <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
        <Text style={styles.footer_text}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={24} color="black" />
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => {
              textChangeHandler(value);
            }}
            onEndEditing={(val) => {
              handleValidUser(val.nativeEvent.text);
            }}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation={"bounceIn"}>
              <Feather color={"green"} name="check-circle" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.Text
            animation={"bounceInLeft"}
            duration={500}
            style={{ marginTop: 5 }}
          >
            Username must be 4 character long.
          </Animatable.Text>
        )}

        <Text style={[styles.footer_text, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" size={24} color="black" />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry}
            onChangeText={(val) => {
              passwordHandler(val);
            }}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            <Ionicons
              name={
                data.secureTextEntry ? "ios-eye-off-outline" : "eye-outline"
              }
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {data.isValidPass ? null : (
          <Animatable.Text
            animation={"bounceInLeft"}
            duration={2000}
            style={{ marginTop: 5 }}
          >
            Password must be 8 character long.
          </Animatable.Text>
        )}

        <Text style={{ color: "#d63031", marginTop: 15, fontWeight: "bold" }}>
          Forgot Password?
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              loginHandler(data.username, data.password);
            }}
          >
            <LinearGradient
              colors={["#d63031", "#ab0101"]}
              style={styles.signIn}
            >
              <Text style={styles.btnText}>SignIn</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SignUpScreen")}
            style={[
              styles.signIn,
              { borderColor: "#d63031", borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#d63031" }}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d63031",
  },
  header: {
    flex: 1,
    backgroundColor: "#d63031",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  footer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 3,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  welcomeTextContainer: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: "white",
    fontFamily: "AveriaLibre_700Bold",
  },
  action: {
    marginTop: 10,
    paddingBottom: 5,

    flexDirection: "row",
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS == "ios" ? 0 : -12,
    marginLeft: 10,
  },
  footer_text: {
    color: "#d63031",
    fontSize: 17,
  },
  signIn: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    marginTop: 50,
  },
});
