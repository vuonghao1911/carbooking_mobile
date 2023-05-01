import React, { useEffect, useState } from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import ModalBus from "../../components/ModalBus";
import Ionicons from "react-native-vector-icons/Ionicons";

import { SetUser, SetBusStation, SetTicketUserInfo } from "../../store/Actions";
import Contex from "../../store/Context";
import "intl";
import "intl/locale-data/jsonp/en";

export default RouteDetails = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, listChairs, placeTo, placeFrom, routeVehical } = state;
  const [busLocation, setBusLocation] = React.useState(placeFrom.busStation[0]);
  const [fullName, setFullName] = React.useState(
    `${user.firstName} ` + " " + `${user.lastName}`
  );
  const [phone, setPhone] = React.useState(`${user.phoneNumber}`);
  const [showModel, SetShowModel] = React.useState(false);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.viewInfo}>
            <View>
              <Text style={{ marginLeft: 5, fontSize: 20 }}>
                {routeVehical.startTime} -{routeVehical.endTime}
              </Text>
            </View>
            <View style={styles.viewPrice}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                }}>
                {new Intl.NumberFormat("en-US").format(`${routeVehical.price}`)}{" "}
                đ
              </Text>
              <Ionicons name="ellipse" color={"#D86A23"} />
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                }}>
                {routeVehical.carType}
              </Text>
              <Ionicons name="ellipse" color={"#D86A23"} />
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                }}>
                {routeVehical.licensePlates}
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
                  {routeVehical.departure.name}
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
                  {routeVehical.destination.name}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ backgroundColor: "white", padding: 15, marginBottom: 15 }}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: "italic",
                color: "gray",
                marginBottom: 10,
              }}>
              {`Ghế đã chọn (` + `${listChairs.length}` + `)`}
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
            style={{ backgroundColor: "white", padding: 15, marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: "italic",
                color: "gray",
                marginBottom: 5,
              }}>
              Chọn điểm lên xe
            </Text>

            {/* <Picker
              selectedValue={busLocation}
              style={{ height: 30 }}
              itemStyle={{ color: "red" }}
              onValueChange={(itemValue, itemIndex) => {
                setBusLocation(itemValue);
              }}>
              {placeFrom.busStation.map((item, index) => {
                return (
                  <Picker.Item
                    style={{
                      fontSize: 12,
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                    itemStyle={{ color: "red" }}
                    label={item.location}
                    value={item.location}
                    key={index}
                  />
                );
              })}
            </Picker> */}
            {/* <ModalBusStation
              showModel={showModel}
              SetShowModel={SetShowModel}
              setBusLocation={setBusLocation}
            /> */}
            <ModalBus
              showModel={showModel}
              SetShowModel={SetShowModel}
              setBusLocation={setBusLocation}
            />
            <TouchableOpacity onPress={() => SetShowModel(!showModel)}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  padding: 5,
                }}>
                <Text>
                  {`${busLocation.address.name}` +
                    " (" +
                    `${busLocation.address.detailAddress}` +
                    ", " +
                    `${busLocation.address.ward}` +
                    ", " +
                    `${busLocation.address.district}` +
                    ", " +
                    `${busLocation.address.province}` +
                    " )"}
                </Text>
                <View
                  style={{
                    width: 20,

                    alignItems: "center",
                    marginLeft: 10,
                  }}>
                  <Ionicons
                    name="caret-down-outline"
                    size={20}
                    color={"gray"}
                  />
                </View>
              </View>
            </TouchableOpacity>
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
              Thông tin khách hàng
            </Text>
            <View
              style={{
                flexDirection: "column",
                marginBottom: 30,
                backgroundColor: "#f1f1f1",
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Họ và Tên
              </Text>
              <TextInput
                editable={false}
                style={styles.input}
                value={fullName}
                onChangeText={(text) => {
                  setFullName(text);
                }}></TextInput>
            </View>
            <View
              style={{ flexDirection: "column", backgroundColor: "#f1f1f1" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Số Điện Thoại
              </Text>
              <TextInput
                editable={false}
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
    width: "80%",
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
    backgroundColor: "#f1f1f1",
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
