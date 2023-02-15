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
import ModalSelectOption from "../ModalSelectOptions";

import {
  SetUser,
  SetVetificaitonId,
  SetCheckLogin,
  SetRouteVehicle,
  SetTicket,
} from "../../store/Actions";
import Contex from "../../store/Context";

export default Items = ({ item, navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical } = state;
  const [showModel, SetShowModel] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        depatch(SetTicket(item));
        navigation.navigate("ticketDetails");
      }}>
      <View style={[styles.Item]}>
        <ModalSelectOption showModel={showModel} SetShowModel={SetShowModel} />

        <View style={styles.viewLeft}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginRight: 20,
            }}>
            <Text style={{ fontSize: 17, color: "gray", marginBottom: 15 }}>
              Gio Xuat Ben
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
              {item.startTime}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>
              {item.date}
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
                {item.departure}
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
                {item.destination}
              </Text>
            </View>
            <View style={styles.viewPlace}>
              <Text
                style={{
                  fontSize: 15,
                  color: "gray",
                  marginTop: 5,
                  fontStyle: "italic",
                }}>
                Thời gian: {item.intendTime} tiếng
              </Text>
            </View>
            <View style={styles.viewItemInfo}>
              <Text style={{ fontSize: 15, color: "black" }}>Ghe: </Text>
              <FlatList
                data={item.chair}
                renderItem={({ item, index }) => {
                  return <Text style={styles.textSeats}>{item.seats}</Text>;
                }}
                horizontal
              />
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
    width: 350,
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
  },
});
