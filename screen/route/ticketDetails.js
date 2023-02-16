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
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import "intl";
import "intl/locale-data/jsonp/en";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SetUser, SetBusStation, SetTicketUserInfo } from "../../store/Actions";
import Contex from "../../store/Context";

export default TicketInfo = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const {
    user,
    listChairs,
    placeTo,
    placeFrom,
    routeVehical,
    busStation,
    ticketUserInfo,
    ticket,
  } = state;

  const [fullName, setFullName] = React.useState(" Vuong Hao");
  const [phone, setPhone] = React.useState("01234213412");

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.viewInfo}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#009387" }}>
            Thong tin khach hang
          </Text>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "gray", marginLeft: 10 }}>
              Ho va Ten
            </Text>
            <Text style={{ fontSize: 15, marginRight: 10 }}>
              {ticket.lastName} {ticket.firstName}
            </Text>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "gray", marginLeft: 10 }}>
              So Dien Thoai
            </Text>
            <Text style={{ fontSize: 15, marginRight: 10 }}>
              {ticket.phone}
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white", padding: 15 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#009387",
              marginBottom: 10,
            }}>
            Thong Tin Chuyen Di
          </Text>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Chuyen Di
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginRight: 10 }}>
                {ticket.departure}
              </Text>
              <Ionicons name="shuffle" size={20} color={"#009387"} />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                {ticket.destination}
              </Text>
            </View>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Thoi Gian
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "#009387",
                  fontWeight: "bold",
                }}>
                {ticket.startTime} - {ticket.endTime}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 12 }}>
              So Ghe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "black",
                }}>
                {ticket.chair.length}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 12 }}>
              Ghe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FlatList
                data={ticket.chair}
                renderItem={({ item, index }) => {
                  return (
                    <Text
                      style={{
                        fontSize: 15,
                        marginRight: 10,
                        color: "#009387",
                        fontWeight: "bold",
                      }}>
                      {item.seats}
                    </Text>
                  );
                }}
                horizontal
              />
            </View>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 12 }}>
              Diem len xe
            </Text>
            <View style={{ flexDirection: "row", width: "60%" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "black",
                }}>
                {ticket.busStation}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Tong Tien
            </Text>
            <View style={{ flexDirection: "row", width: "60%" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "#009387",
                  fontWeight: "bold",
                }}>
                {new Intl.NumberFormat("en-US").format(
                  `${ticket.price * ticket.chair.length}`
                )}{" "}
                d
              </Text>
            </View>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Khuyen mai
            </Text>
            <View style={{ flexDirection: "row", width: "60%" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "#009387",
                  fontStyle: "italic",
                }}>
                Mua trên 3 ve giam 10% giá hóa đơn tối đa 200.000đ
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={styles.viewInFoRoute}>
              <View style={styles.viewPrice}>
                <Text
                  style={{ fontStyle: "italic", color: "gray", fontSize: 16 }}>
                  Khuyến mãi:
                </Text>
                <Text
                  style={{
                    fontStyle: "italic",
                    color: "gray",
                    marginRight: 20,
                    fontSize: 16,
                  }}>
                  60.000
                </Text>
              </View>
              <View style={styles.viewPrice}>
                <Text style={{ fontSize: 18 }}>Tong Tien Ve: </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginRight: 20,
                    color: "#009387",
                  }}>
                  {new Intl.NumberFormat("en-US").format(
                    `${ticket.price * ticket.chair.length - 60000}`
                  )}{" "}
                  d
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    justifyContent: "space-around",
  },

  viewInfo: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
  },
  textSeats: {
    fontSize: 16,
    marginRight: 10,
  },

  viewSearch: {
    backgroundColor: "#D86A23",
    width: "70%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,

    marginTop: 20,
    height: 50,
  },
  viewItemInfo: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  viewPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
  },
  viewInFoRoute: {
    flexDirection: "column",
    height: 90,
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    borderColor: "#009387",
  },
});
