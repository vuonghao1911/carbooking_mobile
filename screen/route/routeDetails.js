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
import Swiper from "react-native-swiper";
import { SetUser, SetBusStation, SetTicketUserInfo } from "../../store/Actions";
import Contex from "../../store/Context";

export default RouteDetails = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, listChairs, placeTo, placeFrom, routeVehical } = state;
  const [busLocation, setBusLocation] = React.useState(
    placeFrom.busStation[0].location
  );
  const [fullName, setFullName] = React.useState(" Vuong Hao");
  const [phone, setPhone] = React.useState("01234213412");

  console.log(placeFrom.busStation, placeTo.busStation);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.viewInfo}>
            <View>
              <Text style={{ marginLeft: 5, fontSize: 20 }}>
                {routeVehical.startTime} - {routeVehical.endTime}
              </Text>
            </View>
            <View style={styles.viewPrice}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                }}>
                {routeVehical.price} d
              </Text>
              <Ionicons name="ellipse" color={"gray"} />
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                }}>
                {routeVehical.carType}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
              }}>
              <View style={[styles.viewPlace, { marginLeft: -3 }]}>
                <Ionicons name="paper-plane" color={"orange"} size={20} />
                <Text style={{ fontSize: 15, color: "black", marginLeft: 15 }}>
                  {routeVehical.departure}
                </Text>
              </View>
              <View style={[styles.viewPlace]}>
                <Ionicons name="ellipse" color={"gray"} size={13} />
                <Text
                  style={{
                    fontSize: 12,
                    color: "gray",
                    marginLeft: 17,
                    fontStyle: "italic",
                  }}>
                  Thời gian dự kiến: {routeVehical.intendTime} tiếng
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
                    fontSize: 15,
                    color: "black",
                    marginLeft: 15,
                  }}>
                  {routeVehical.destination}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ backgroundColor: "white", padding: 15, marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: "italic",
                color: "gray",
                marginBottom: 10,
              }}>
              {`Ghe da chon (` + `${listChairs.length}` + `)`}
            </Text>

            <FlatList
              data={listChairs}
              renderItem={({ item, index }) => {
                return <Text style={styles.textSeats}>{item.seats}</Text>;
              }}
              horizontal
            />
          </View>

          <View
            style={{ backgroundColor: "white", padding: 15, marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: "italic",
                color: "gray",
                marginBottom: 5,
              }}>
              Chon diem len xe
            </Text>

            <Picker
              selectedValue={busLocation}
              style={{ height: 30 }}
              onValueChange={(itemValue, itemIndex) => {
                setBusLocation(itemValue);
              }}>
              {placeFrom.busStation.map((item, index) => {
                return (
                  <Picker.Item
                    style={{ fontSize: 12 }}
                    label={item.location}
                    value={item.location}
                    key={index}
                  />
                );
              })}
            </Picker>
          </View>
          <View
            style={{ backgroundColor: "white", padding: 15, marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: "italic",
                color: "gray",
                marginBottom: 20,
              }}>
              Thong tin lien lac
            </Text>
            <View style={{ flexDirection: "column", marginBottom: 30 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Ho va Ten
              </Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={(text) => {
                  setFullName(text);
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
              style={styles.viewSearch}
              onPress={() => {
                depatch(SetBusStation(busLocation));
                depatch(SetTicketUserInfo({ fullName, phone }));
                navigation.navigate("ticketInfo");
              }}>
              <View>
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
                  Tiếp Theo
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
    backgroundColor: "#D86A23",
    width: "70%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,

    marginTop: 10,
    height: 50,
  },
});
