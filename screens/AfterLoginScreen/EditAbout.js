import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";


const EditAbout = () => {
  const bs = useRef();
  const fall = new Animated.Value(1);
  const [image, setImage] = useState(
    "https://scontent.fhdd2-1.fna.fbcdn.net/v/t1.6435-9/137326349_1139530766518949_7766835192432196362_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZZWjs8ehVdAAX-L5Shb&tn=sojz5b7zcXNpD0MV&_nc_ht=scontent.fhdd2-1.fna&oh=00_AT-SOrV901xZfn1MzA31WV8RCurjVsFaZbqluR3zk-LiJg&oe=62E34350"
  );

  const takePhotofromCamera = async () => {
    const img = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,

      cropping: true,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      compressImageQuality: 0.7,
    });
    console.log(img);
    setImage(img.uri);
    bs.current.snapTo(1);
  };
  const chooseFromLibrary = async () => {
    const img = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      width: 300,
      height: 300,
    });
    console.log(img);
    setImage(img.uri);
    bs.current.snapTo(1);
  };
  const renderInner = () => {
    return (
      <View style={styles.panel}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => takePhotofromCamera()}
        >
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => chooseFromLibrary()}
        >
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => {
            bs.current.snapTo(1);
          }}
        >
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        renderContent={renderInner}
        renderHeader={renderHeader}
        ref={bs}
        snapPoints={[330, 0]}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              bs.current.snapTo(0);
            }}
          >
            <View
              style={{
                height: 100,
                width: 130,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 20 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      //   paddingLeft: 20,
                      opacity: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      //   borderWidth: 1,
                      //   borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            Aliraza Lalani
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="First Name"
            style={styles.textInput}
            placeholderTextColor="#666666"
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Last Name"
            style={styles.textInput}
            placeholderTextColor="#666666"
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" size={20} />
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            placeholderTextColor="#666666"
            autoCorrect={false}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" size={20} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor="#666666"
            autoCorrect={false}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" size={20} />
          <TextInput
            placeholder="Country"
            style={styles.textInput}
            placeholderTextColor="#666666"
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons name="map-marker-outline" size={20} />
          <TextInput
            placeholder="City"
            style={styles.textInput}
            placeholderTextColor="#666666"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.commandButton}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditAbout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
