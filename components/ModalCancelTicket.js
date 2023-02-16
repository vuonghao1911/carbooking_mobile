import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import moment from "moment";
import Modal from "react-native-modal";

import Contex from "../store/Context";
import { SetTicket } from "../store/Actions";
const ModalCancelTicket = ({
  showModel,
  SetShowModel,
  showModelOption,
  SetShowModelOption,
}) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, ticket, navigation } = state;

  return (
    <Modal
      isVisible={showModel}
      style={{ justifyContent: "center", alignItems: "center" }}
      animationIn={"fadeInUp"}
      animationOut={"fadeOut"}
      onBackdropPress={() => SetShowModel(!showModel)}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",

            width: "100%",
            marginBottom: 10,
          }}>
          <Text
            style={{
              alignItems: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "red",
            }}>
            Thong Tin Ve Huy
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginLeft: 10,
            justifyContent: "center",
          }}>
          <View style={styles.viewPlace}>
            <Text
              style={{
                fontSize: 17,
                color: "black",
                marginRight: 15,
                fontWeight: "bold",
              }}>
              {ticket.departure}
            </Text>
            <Ionicons name="shuffle" color={"#009387"} size={27} />
            <Text
              style={{
                fontSize: 17,
                color: "black",
                marginLeft: 15,
                fontWeight: "bold",
              }}>
              {ticket.destination}
            </Text>
          </View>

          <View style={styles.viewPlace}>
            <Text style={{ fontSize: 20, color: "black", marginLeft: 15 }}>
              {ticket.startTime} - {ticket.endTime}
            </Text>
          </View>

          <View style={styles.viewPlace}>
            <Text
              style={{
                fontSize: 18,
                color: "black",
                marginLeft: 15,
                fontWeight: "bold",
              }}>
              {ticket.date}
            </Text>
          </View>
        </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity
            style={[
              styles.viewSearch,
              { backgroundColor: "#009387", marginRight: 20 },
            ]}
            onPress={() => {
              SetShowModel(!showModel);
              SetShowModelOption(!showModelOption);

              navigation.navigate("Second");
            }}>
            <View>
              <Text
                style={{ fontSize: 17, color: "white", fontWeight: "bold" }}>
                Huy Ve
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewSearch, { backgroundColor: "black" }]}
            onPress={() => SetShowModel(!showModel)}>
            <View>
              <Text
                style={{ fontSize: 17, color: "white", fontWeight: "bold" }}>
                Thoat
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCancelTicket;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: 250,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 15,
    width: "100%",
  },
  viewBottom: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",

    marginBottom: 5,
    width: "100%",
  },
  viewSearch: {
    width: "30%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,

    marginTop: 15,
    height: 40,
  },
});
