import React, { useEffect, useState } from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import "intl";
import "intl/locale-data/jsonp/en";

import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";

import { SetRouteVehicle } from "../../store/Actions";
import Contex from "../../store/Context";

export default Items = ({ item, navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical } = state;
  const [disable, setDisable] = React.useState(false);
  React.useEffect(() => {
    if (!item.price) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    console.log("dis", disable);
  });

  return (
    <TouchableOpacity
      disabled={disable}
      onPress={() => {
        depatch(SetRouteVehicle(item));
        // depatch(
        //   SetPromotions({
        //     promotion: item?.promotion.promotion,
        //     promotionLine: item?.promotion.promotionLine,
        //   })
        // );
        navigation.navigate("selectChair");
      }}>
      <View style={[styles.Item]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Text style={{ marginLeft: 5, fontSize: 25 }}>
            {item.startTime} -{item.endTime}
          </Text>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "bold",
              color: "gray",
            }}>
            {moment(new Date(item.startDate)).format("DD/MM/yyyy")}
          </Text>
        </View>
        <View style={styles.viewPrice}>
          <Text
            style={{
              fontSize: 17,
              color: "black",
            }}>
            {item.price
              ? new Intl.NumberFormat("en-US").format(`${item.price}`) + "đ"
              : "Chưa có giá"}
          </Text>
          <Ionicons name="ellipse" color={"gray"} />
          <Text
            style={{
              fontSize: 17,
              color: "black",
            }}>
            {item.carType}
          </Text>
          <Ionicons name="ellipse" color={"gray"} />
          <Text
            style={{
              fontSize: 17,
              color: "black",
            }}>
            {item.licensePlates}
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
              {item.departure.name}
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
              {item.destination.name}
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
    backgroundColor: "white",
  },

  Item: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 350,
    height: 230,

    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: 0,
    borderWidth: 0,
    borderColor: "#f1f1f1",
    borderTopEndRadius: 25,
    margin: 10,
    paddingLeft: 15,
    borderWidth: 1,
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 15,
    elevation: 10,
    borderRadius: 10,
  },
  viewPrice: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    width: "95%",
    height: 35,
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
  },
});
