import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";
import { LocaleConfig } from "react-native-calendars";
import Modal from "react-native-modal";

import Contex from "../store/Context";
const ModalCalendar = ({ showModel, setBusLocation, SetShowModel, date }) => {
  const { state, depatch } = React.useContext(Contex);
  const { placeFrom } = state;

  const ItemLocation = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setBusLocation(item);
          SetShowModel(!showModel);
        }}>
        <View
          style={[
            item.address.name.length < 10
              ? {
                  height: 30,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  borderBottomWidth: 0.5,
                  borderBottomColor: "gray",
                  marginBottom: 10,

                  width: "95%",
                  marginTop: 5,
                }
              : {
                  height: 40,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  borderBottomWidth: 0.5,
                  borderBottomColor: "gray",
                  marginBottom: 10,
                  width: "95%",
                  marginTop: 5,
                },
          ]}>
          <Text style={{ fontSize: 13, marginBottom: 5 }}>
            {`${item.address.name}` +
              " (" +
              `${item.address.detailAddress}` +
              ", " +
              `${item.address.ward}` +
              ", " +
              `${item.address.district}` +
              ", " +
              `${item.address.province}` +
              " )"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={showModel}
      style={{}}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      onBackdropPress={() => SetShowModel(!showModel)}>
      <View style={styles.container}>
        <FlatList
          data={placeFrom.busStation}
          renderItem={({ item, index }) => {
            return <ItemLocation item={item} />;
          }}
        />
      </View>
    </Modal>
  );
};

export default ModalCalendar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
  },
  viewtop: {
    marginTop: 30,
    display: "flex",
    // backgroundColor: "#0688FE",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },

  passwordContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    width: 200,
    borderColor: "#0688FE",
    paddingBottom: 5,
  },
  inputStyle: {
    flex: 1,
  },
});
