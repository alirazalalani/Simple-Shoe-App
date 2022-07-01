import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            size={80}
            source={{
              uri: "https://scontent.fhdd2-1.fna.fbcdn.net/v/t1.6435-9/137326349_1139530766518949_7766835192432196362_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZZWjs8ehVdAAX-L5Shb&tn=sojz5b7zcXNpD0MV&_nc_ht=scontent.fhdd2-1.fna&oh=00_AT-SOrV901xZfn1MzA31WV8RCurjVsFaZbqluR3zk-LiJg&oe=62E34350",
            }}
          />
          <View style={{ marginLeft: 20, justifyContent: "center" }}>
            <Title style={styles.title}>Aliraza Lalani</Title>
            <Caption style={styles.caption}>@alirza.lalani</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={20}
            color={"#777777"}
          />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Hyderabad, Pakistan
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" size={20} color={"#777777"} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            +92-335-xxx-xxxx
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" size={20} color={"#777777"} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            lalani@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>$140</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Order</Caption>
        </View>
      </View>
      <ScrollView style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={25}
              color="#FF6347"
            />
            <Text style={styles.menuItemText}>Your Favourites</Text>
          </View>
        </TouchableRipple>
        {/* ------------- */}
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={25}
              color="#FF6347"
            />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        {/* ------------------ */}
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="share-outline"
              size={25}
              color="#FF6347"
            />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" size={25} color="#FF6347" />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
