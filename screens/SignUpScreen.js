import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const B = (props) => (
    <Text style={{ fontWeight: "bold", color: "#d63031" }}>
      {props.children}
    </Text>
  );

  const emailHandler = (val) => {
    if (val !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePassword = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleSecureEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const handleConfirmPass = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmSecurity = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Shine your feet today!</Text>
        </View>
      </View>
      <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
        <Text style={styles.footer_text}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={24} color="black" />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onEndEditing={(val) => {
              emailHandler(val);
            }}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation={"bounceIn"}>
              <Feather color={"green"} name="check-circle" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.footer_text, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" size={24} color="black" />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry}
            onChangeText={(val) => {
              handlePassword(val);
            }}
          />
          <TouchableOpacity onPress={handleSecureEntry}>
            <Ionicons
              name={
                data.secureTextEntry ? "ios-eye-off-outline" : "eye-outline"
              }
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.footer_text, { marginTop: 35 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" size={24} color="black" />
          <TextInput
            placeholder="Confirm Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.confirm_secureTextEntry}
            onChangeText={(val) => {
              handleConfirmPass(val);
            }}
          />
          <TouchableOpacity onPress={handleConfirmSecurity}>
            <Ionicons
              name={
                data.confirm_secureTextEntry
                  ? "ios-eye-off-outline"
                  : "eye-outline"
              }
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Text style={{ color: "grey", marginTop: 15, fontWeight: "bold" }}>
          By signing up you are agree to our <B>Terms of service</B> and{" "}
          <B>Privacy Policy</B>.
        </Text>
        <View style={styles.button}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#d63031", "#ab0101"]}
              style={styles.signIn}
            >
              <Text style={styles.btnText}>SignUp</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SignInScreen")}
            style={[
              styles.signIn,
              { borderColor: "#d63031", borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#d63031" }}
            >
              SignIn
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

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
