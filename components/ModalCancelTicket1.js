import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Modal from "react-native-modal";

import Contex from "../store/Context";
const ModalCancelTicket = ({
  showModel,
  SetShowModel,
  status,
  title,
  navigation,
}) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, ticket } = state;

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
              fontSize: 18,
              fontWeight: "bold",
              color: "orange",
            }}>
            THÔNG TIN THANH TOÁN
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
                fontSize: 19,
                color: "black",
                marginTop: 20,
              }}>
              {title}
            </Text>
          </View>
        </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity
            style={[
              styles.viewSearch,
              { backgroundColor: "orange", marginRight: 20 },
            ]}
            onPress={() => {
              if (status) {
                navigation.navigate("Second");
                SetShowModel(!showModel);
              } else {
                SetShowModel(!showModel);
              }
            }}>
            <View>
              <Text
                style={{ fontSize: 17, color: "white", fontWeight: "bold" }}>
                Đồng ý
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
    height: 150,
    width: "85%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
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
    borderRadius: 10,

    marginTop: 15,
    height: 40,
  },
});
