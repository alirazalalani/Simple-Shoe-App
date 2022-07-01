import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { markers, mapStandardStyle } from "../../model/mapData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import StarRating from "./StarRating";
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const ExploreScreen = () => {
  const initialMapState = {
    markers,
    categories: [
      {
        name: "Nike Store",
        icon: (
          <MaterialCommunityIcons name="shoe-sneaker" size={18} color="black" />
        ),
      },
      {
        name: "Adidas",
        icon: (
          <MaterialCommunityIcons name="shoe-sneaker" size={18} color="black" />
        ),
      },
      {
        name: "Fila",
        icon: (
          <MaterialCommunityIcons name="shoe-sneaker" size={18} color="black" />
        ),
      },
      {
        name: "ASICS",
        icon: (
          <MaterialCommunityIcons name="shoe-sneaker" size={18} color="black" />
        ),
      },
    ],
    region: {
      longitude: 73.135,
      latitude: 31.4504,
      latitudeDelta: 31.4504,
      longitudeDelta: 73.135,
    },
  };

  const [state, setState] = useState(initialMapState);

  let mapAnimation = new Animated.Value(0);
  let mapIndex = 0;

  // useEffect(() => {
  //   mapAnimation.addListener(({ value }) => {
  //     let index = Math.floor(value / CARD_WIDTH + 0.3);
  //     if (index >= state.markers.length) {
  //       index = state.markers.length - 1;
  //     }
  //     if (index <= 0) {
  //       index = 0;
  //     }
  //     const regionTimeout = setTimeout(() => {
  //       if (mapIndex !== index) {
  //         mapIndex = index;
  //         const { coordinate } = state.markers[index];
  //         _map.current.animatedToRegion;
  //       }
  //     }, 10);
  //   });
  // });

  const onMarkerPress = (mapEventData) => {
    const marketID = mapEventData._targetInst.return.key;
    let x = marketID * CARD_WIDTH + marketID * 20;
    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const _scrollView = useRef(null);

  return (
    <View style={styles.container}>
      <MapView style={styles.container} initialRegion={state.region}>
        {state.markers.map((marker, index) => {
          return (
            <MapView.Marker
              key={index}
              coordinate={marker.coordinate}
              onPress={(e) => onMarkerPress(e)}
            >
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require("../../assets/map_marker1.png")}
                  style={[styles.marker]}
                  resizeMode="cover"
                />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          style={{
            flex: 1,
            padding: 0,
          }}
          placeholder="Search here"
          autoCapitalize="none"
          placeholderTextColor={"#000"}
        />
        <Ionicons name="ios-search" size={20} />
      </View>
      <ScrollView
        style={styles.chipScrollView}
        height={50}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        contentInset={{
          //ios Only, right side se space milegi last wale ko
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === "android" ? 20 : 0,
        }}
      >
        {state.categories.map((category, index) => {
          return (
            <TouchableOpacity key={index} style={styles.chipsItem}>
              {category.icon}
              <Text style={{paddingLeft:5}}>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        style={styles.scrollView}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET - 30 : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {state.markers.map((marker, index) => {
          return (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                resizeMode="cover"
                style={styles.cardImge}
              />
              <View style={styles.textContent} key={index}>
                <Text numberOfLines={1} style={styles.cardTitle}>
                  {marker.title}
                </Text>
                <StarRating
                  rating={marker.rating}
                  reviews={marker.reviews}
                  key={index}
                />
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
                <View style={styles.button}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={
                      (styles.signIn,
                      {
                        borderColor: "#FF6347",
                        borderWidth: 1,
                      })
                    }
                  >
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: "#FF6347",
                        },
                      ]}
                    >
                      Order Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipScrollView: {
    position: "absolute",
    top: Platform.OS === "ios" ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
    height: 35,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    elevation: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: { x: 2, y: -2 },
    shadowOpacity: 0.3,
    height: CARD_HEIGHT + 30,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImge: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    justifyContent: "center",
    marginTop: 5,
    // width: "100%",
  },
  signIn: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    padding: Platform.OS === "ios" ? CARD_HEIGHT - 211 : CARD_HEIGHT - 215,
    fontWeight: "bold",
    alignSelf: "center",
  },

  // map: {
  //   height: "100%",
  // },
  // bubble: {
  //   alignSelf: "flex-start",
  //   backgroundColor: "#fff",
  //   borderRadius: 6,
  //   borderColor: "#ccc",
  //   borderWidth: 0.5,
  //   padding: 15,
  //   width: 180,
  // },
  // arrow: {
  //   backgroundColor: "transparent",
  //   borderColor: "transparent",
  //   borderTopColor: "#fff",
  //   borderWidth: 16,
  //   alignSelf: "center",
  //   marginTop: -32,
  // },
  // arrowBorder: {
  //   backgroundColor: "transparent",
  //   borderColor: "transparent",
  //   borderTopColor: "#fff",
  //   borderWidth: 16,
  //   alignSelf: "center",
  //   marginTop: -0.5,
  // },
  // name: {
  //   fontSize: 16,
  //   marginBottom: 5,
  // },
  // image: {
  //   width: 100,
  //   height: 80,
  // },
});
