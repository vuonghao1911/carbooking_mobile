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
import { Picker } from "@react-native-picker/picker";

import Ionicons from "react-native-vector-icons/Ionicons";

import { SetUser, SetBusStation, SetTicketUserInfo } from "../store/Actions";
import Contex from "../store/Context";

export default UpdateProfile = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, listChairs, placeTo, placeFrom, routeVehical } = state;

  const [lastName, setLastName] = React.useState(" Vuong Hao");
  const [firstName, setFirstName] = React.useState("  Dep Trai");
  const [phone, setPhone] = React.useState("01234213412");

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{ backgroundColor: "white", padding: 15, marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 20,
                fontStyle: "italic",
                color: "gray",
                marginBottom: 20,
                fontWeight: "bold",
              }}>
              Cap nhat thong tin
            </Text>
            <View style={{ flexDirection: "column", marginBottom: 30 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Ho
              </Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={(text) => {
                  setFirstName(text);
                }}></TextInput>
            </View>
            <View style={{ flexDirection: "column", marginBottom: 30 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Ten
              </Text>
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={(text) => {
                  setLastName(text);
                }}></TextInput>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                So Dien Thoai
              </Text>
              <TextInput
                style={styles.input}
                value={phone}
                keyboardType="number-pad"
                onChangeText={(text) => {
                  setPhone(text);
                }}></TextInput>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={[
                styles.viewSearch,
                { borderWidth: 1, borderColor: "#694fad" },
              ]}
              onPress={() => {
                depatch(SetBusStation(busLocation));
                depatch(SetTicketUserInfo({ fullName, phone }));
                //  navigation.navigate("ticketInfo");
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#694fad",
                    fontWeight: "bold",
                  }}>
                  Cap Nhat
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.viewSearch, { backgroundColor: "#694fad" }]}
              onPress={() => {
                depatch(SetBusStation(busLocation));
                depatch(SetTicketUserInfo({ fullName, phone }));
                //  navigation.navigate("ticketInfo");
              }}>
              <View>
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
                  Dang Xuat
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  viewPrice: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "orange",
    width: "50%",
    height: 30,
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
  },
  textSeats: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    border: "none",
    borderRadius: 7,
    paddingLeft: 10,
    height: 30,
    // backgroundColor: "#dcdee3",
    color: "black",

    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D86A23",
  },
  viewInfo: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 180,
    marginBottom: 20,
  },
  viewSearch: {
    width: "80%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,

    marginTop: 15,
    height: 50,
  },
});
