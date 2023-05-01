import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import "intl";
import "intl/locale-data/jsonp/en";
import { SetListChairs } from "../../store/Actions";
import Contex from "../../store/Context";
import QRCode from "react-native-qrcode-svg";

export default Items = ({ item, navigation, setPrice }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical, listChairs, ticket } = state;

  return (
    <View style={styles.Item}>
      <View style={{ flexDirection: "row" }}>
        <QRCode
          size={80}
          value={`https://6348d6f7a59874146b11ea5c.mockapi.io/api/list/book/${ticket._id}`}
        />
        <View
          style={{
            flexDirection: "column",

            justifyContent: "space-around",

            alignContent: "space-around",
            marginLeft: 10,
          }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>{ticket.code}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>Ghế: </Text>
            <Text>{item.seats}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>Giá: </Text>
            <Text>
              {new Intl.NumberFormat("en-US").format(`${ticket.price}`)} đ
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Item: {
    flex: 1,
    justifyContent: "space-around",
    width: 220,
    borderWidth: 1,
    borderRadius: 10,
    padding: 7,
    marginRight: 10,
  },
  textSeats: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  viewItemSelect: {
    flexDirection: "column",
    width: 60,
    height: 40,
    backgroundColor: "",
    justifyContent: "space-around",
    backgroundColor: "orange",
    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 10,
    margin: 3,
    marginRight: 55,
  },
});
