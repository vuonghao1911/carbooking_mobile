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
import { SetUser, SetVetificaitonId, SetCheckLogin } from "../store/Actions";
import Contex from "../store/Context";
const array = [
  {
    img: "https://cnm1.s3.ap-southeast-1.amazonaws.com/6ef96c55-6533-4292-89b7-e75fdf2fcce8-1680578649288.png",
  },
  {
    img: "https://cnm1.s3.ap-southeast-1.amazonaws.com/b41f95a2-a671-496c-b20e-b55438530bc5-1672882309703.png",
  },
  {
    img: "https://cnm1.s3.ap-southeast-1.amazonaws.com/efcbd1e6-b648-480f-8f91-5f03e9a94fd1-1679105293199.png",
  },
  {
    img: "https://cnm1.s3.ap-southeast-1.amazonaws.com/f61e554b-c6f5-48ca-b69c-0b1fbae73fd7-1654309450420.jpg",
  },
];

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
  const { state, depatch } = React.useContext(Contex);
  const { user, vetificaitonId } = state;

  console.log("user", user);

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
            {/* <Image
              style={{ width: 50, height: 50, borderRadius: 40 }}
              source={{
                uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/908.jpg",
              }}
            /> */}
            <Ionicons name="person-circle" size={50} color={"#D86A23"} />
            <View
              style={{
                flexDirection: "column",
                //alignContent: "center",
                // alignItems: "center",
                marginLeft: 10,
              }}>
              <Text
                style={{ fontSize: 14, fontStyle: "italic", color: "#9506D8" }}>
                Xin chào,
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "#D86A23" }}>
                {user
                  ? user.firstName + " " + user.lastName
                  : "Nguyen Vuong Hao"}
              </Text>
            </View>
          </View>

          {/* <Image
            style={{ width: 50, height: 50, borderRadius: 10 }}
            source={{
              uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/908.jpg",
            }}
          /> */}
          <Ionicons name="logo-foursquare" size={50} color={"#D86A23"} />
        </View>
        <View style={styles.viewPaner}>
          <Text style={{ fontSize: 40, color: "#D86A23" }}>FURISAS</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SearchRoute")}>
          <View style={styles.viewSearch}>
            <Ionicons name="search-outline" size={25} color={"white"} />

            <Text
              style={{
                fontSize: 18,
                color: "white",
                fontWeight: "bold",
                marginRight: 70,
              }}>
              MUA VÉ XE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#D86A23",
          marginLeft: 20,
          textDecorationLine: "underline",
          textDecorationColor: "#D86A23",
        }}>
        Tin tức mới nhất về Furisas
      </Text>
      <View style={styles.viewBody}>
        <Swiper style={styles.wrapper} loop={true} autoplay={true}>
          {array.map((item, index) => {
            return (
              <Image
                style={{
                  height: 300,
                  width: 380,
                  borderRadius: 10,
                  marginLeft: 5,
                  alignItems: "center",
                  marginTop: 20,
                }}
                key={index}
                source={{
                  uri: item.img,
                }}
              />
            );
          })}
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
    backgroundColor: "white",
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
    backgroundColor: "#D86A23",
    width: "80%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    marginLeft: 35,
    marginBottom: 30,
    marginTop: 20,
    height: 50,
  },
  viewPaner: {
    width: "75%",
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
    shadowRadius: 40,
    elevation: 20,
  },
  viewBody: {
    height: 400,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
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

    borderRadius: 15,
    margin: 10,
  },
});
