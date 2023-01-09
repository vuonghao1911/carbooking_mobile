import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";

const Items = ({ item, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      console.log("item", item);
      navigation.navigate("Details", item);
    }}>
    <View style={styles.Item}>
      <Image
        style={{ height: 110, width: 100, borderRadius: 10 }}
        source={{
          uri: item.img,
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
          }}>
          <View>
            <Text style={{ marginRight: 10, fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>

          <Text style={{ fontSize: 15, color: "green", fontWeight: "bold" }}>
            $ {item.price}
          </Text>
        </View>
        <Ionicons name="cart-outline" size={25} color={"green"} />
      </View>
    </View>
  </TouchableOpacity>
);

export default Start = ({ navigation }) => {
  const [listImg, setListImg] = useState([
    "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135062/istockphoto-869683786-612x612_ffddpd.png",
    "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135060/360_F_266909519_YCRZy0e3fPNHOXkPMDq3RSFyTN3BGAVe_u7skua.png",
    "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135058/360_F_71848853_001bQi5QfpAOahc3ZPr42IL9j20NBlB1_cuz6wn.png",
  ]);

  const getBookData = async () => {
    try {
      let response = await fetch(
        "https://6348d6f7a59874146b11ea5c.mockapi.io/api/list/plant"
      );
      let json = await response.json();
      setListImg(json);
      console.log("data", json);
      // console.log("json", book);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    //  getBookData();
  }, []);
  const renderItem = ({ item }) => (
    <Items item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View
        style={
          {
            // backgroundColor: "black",
            // height: 300,
          }
        }>
        <View style={styles.viewInFo}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 40 }}
              source={{
                uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/908.jpg",
              }}
            />
            <View
              style={{
                flexDirection: "column",
                //alignContent: "center",
                // alignItems: "center",
                marginLeft: 20,
              }}>
              <Text
                style={{ fontSize: 14, fontStyle: "italic", color: "#9506D8" }}>
                Xin chào,
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "#D86A23" }}>
                Nguyen Vuong Hao
              </Text>
            </View>
          </View>

          <Image
            style={{ width: 50, height: 50, borderRadius: 10 }}
            source={{
              uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/908.jpg",
            }}
          />
        </View>
        <View style={styles.viewPaner}>
          <Text style={{ fontSize: 40, color: "#D86A23" }}>FURISAS</Text>
        </View>

        <View style={styles.viewSearch}>
          <Ionicons name="search-outline" size={25} color={"white"} />
          <TextInput
            style={styles.styeInput}
            placeholder="Search..."
            placeholderTextColor="white"
          />
          <Ionicons name="options-outline" size={25} color={"white"} />
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "green",
          marginLeft: 20,
        }}>
        Categories
      </Text>
      <View style={styles.viewBody}>
        <Swiper style={styles.wrapper} loop={true} autoplay={true}>
          <Image
            style={{ height: 350, width: 400, borderRadius: 100 }}
            source={{
              uri: "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135058/360_F_71848853_001bQi5QfpAOahc3ZPr42IL9j20NBlB1_cuz6wn.png",
            }}
          />
          <Image
            style={{ height: 350, width: 400, borderRadius: 100 }}
            source={{
              uri: "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135060/360_F_266909519_YCRZy0e3fPNHOXkPMDq3RSFyTN3BGAVe_u7skua.png",
            }}
          />
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 30 : 25,
    flexDirection: "column",
    backgroundColor: "#E3FAF4",
  },
  viewInFo: {
    margin: 15,
    //  flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styeInput: {
    width: 150,
    height: 50,
    color: "white",
  },
  viewSearch: {
    width: "80%",
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginLeft: 40,
    marginBottom: 30,
    marginTop: 20,
  },
  viewPaner: {
    width: "80%",
    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginLeft: 40,
    marginBottom: 30,
    marginTop: 20,
    height: 100,
    borderWidth: 1,
    borderColor: "#9506D8",
    shadowColor: "#9506D8",
    shadowRadius: 10,
    elevation: 40,
  },
  viewBody: {
    backgroundColor: "#E3FAF4",
    height: 400,
  },
  Item: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 180,
    height: 230,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 15,
    margin: 10,
  },
});
