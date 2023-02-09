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
import {
  SetUser,
  SetVetificaitonId,
  SetCheckLogin,
  SetRouteVehicle,
} from "../../store/Actions";
import Contex from "../../store/Context";

export default Items = ({ item, navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical } = state;

  return (
    <TouchableOpacity
      onPress={() => {
        depatch(SetRouteVehicle(item));
        navigation.navigate("selectChair");
      }}>
      <View style={[styles.Item]}>
        <View>
          <Text style={{ marginLeft: 5, fontSize: 25 }}>
            {item.startTime} - {item.endTime}
          </Text>
        </View>
        <View style={styles.viewPrice}>
          <Text
            style={{
              fontSize: 17,
              color: "black",
            }}>
            {item.price}d
          </Text>
          <Ionicons name="ellipse" color={"gray"} />
          <Text
            style={{
              fontSize: 17,
              color: "black",
            }}>
            {item.carType}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <View style={styles.viewPlace}>
            <Ionicons name="paper-plane" color={"orange"} size={20} />
            <Text style={{ fontSize: 20, color: "black", marginLeft: 15 }}>
              {item.departure}
            </Text>
          </View>
          <View style={styles.viewPlace}>
            <Ionicons name="ellipse" color={"gray"} size={15} />
            <Text
              style={{
                fontSize: 15,
                color: "gray",
                marginLeft: 17,
                fontStyle: "italic",
              }}>
              Thời gian dự kiến: {item.intendTime} tiếng
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginLeft: -3,
            }}>
            <Ionicons name="location" color={"orange"} size={20} />
            <Text
              style={{
                fontSize: 20,
                color: "black",
                marginLeft: 15,
              }}>
              {item.destination}
            </Text>
            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: 180,
              }}>
              <Ionicons name="wifi" color={"orange"} size={20} />
              <Ionicons name="tv" color={"orange"} size={20} />
            </View> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 30 : 25,
    flexDirection: "column",
    backgroundColor: "#F2F2F2",
  },

  Item: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 350,
    height: 200,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderTopEndRadius: 25,
    margin: 10,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#D86A23",
  },
  viewPrice: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "orange",
    width: "65%",
    height: 35,
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
  },
});
