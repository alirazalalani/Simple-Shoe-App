import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const StarRating = (props) => {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    let name = "ios-star";
    if (i > props.rating) {
      name = "ios-star-outline";
    }
    stars.push(<Ionicons color={"#FF8C00"} name={name} size={15} />);
  }
  return (
    <View style={styles.container}>
      <Text>{stars}</Text>
      <Text style={styles.text}>{props.reviews}</Text>
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 12,
    marginLeft: 5,
    color: "#444",
  },
});
