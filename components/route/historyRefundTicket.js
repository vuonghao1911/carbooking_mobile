import React, { useEffect, useState } from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import { SetTicket, SetNavigation } from "../../store/Actions";
import Contex from "../../store/Context";

import moment from "moment";

export default Items = ({ item, navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical } = state;
  const [showModel, SetShowModel] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        depatch(SetTicket(item));
        depatch(SetNavigation(navigation));
        navigation.navigate("ticketRefund");
      }}>
      <View style={[styles.Item]}>
        <View style={styles.viewLeft}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginRight: 20,
            }}>
            <Text style={{ fontSize: 17, color: "gray", marginBottom: 15 }}>
              Giờ Xuất Bến
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
              {moment(new Date(item.startDate)).format("DD-MM-yyyy")}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>
              {item.startTime}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <View style={styles.viewPlace}>
              <Ionicons name="paper-plane" color={"orange"} size={17} />
              <Text style={{ fontSize: 16, color: "black", marginLeft: 15 }}>
                {item.departure.name}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}>
              <Ionicons name="location" color={"orange"} size={17} />
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  marginLeft: 15,
                }}>
                {item.destination.name}
              </Text>
            </View>
            <View style={[styles.viewItemInfo]}>
              <Text style={{ fontSize: 15, color: "black" }}>Ghế trả: </Text>
              <FlatList
                data={item.chairRefund}
                numColumns={2}
                renderItem={({ item, index }) => {
                  return <Text style={styles.textSeats}>{item.seats}</Text>;
                }}
              />
            </View>
            <View style={styles.viewPlace}>
              <Text
                style={{
                  fontSize: 15,
                  color: "red",
                  marginTop: 10,
                }}>
                Ngày hủy:{" "}
                {moment(new Date(item.createdAt)).format("DD-MM-yyyy")}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            alignContent: "flex-start",
            marginTop: -120,
          }}
          onPress={() => {
            depatch(SetTicket(item));
            SetShowModel(!showModel);
          }}>
          <Ionicons name="ellipsis-horizontal" color={"orange"} size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 30 : 25,
    flexDirection: "column",
    backgroundColor: "#E3FAF4",
  },

  Item: {
    //flex: 1 / 2,
    flexDirection: "row",
    width: 360,
    height: 150,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 15,
    margin: 10,
    paddingLeft: 15,
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
  viewLeft: {
    flexDirection: "column",
    justifyContent: "center",

    borderRightColor: "gray",
    borderRightWidth: 2,
    alignItems: "center",
    padding: 10,
    borderStyle: "dotted",
  },
  textSeats: {
    fontSize: 16,
    marginRight: 10,
  },
  viewItemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
