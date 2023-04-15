import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Modal from "react-native-modal";

import Contex from "../store/Context";

const ModalSelectOption = ({ showModel, setBusLocation, SetShowModel }) => {
  const { state, depatch } = React.useContext(Contex);
  const { placeFrom } = state;

  return (
    <Modal
      isVisible={showModel}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
      animationIn={"fadeInUp"}
      animationOut={"slideOutDown"}
      onBackdropPress={() => SetShowModel(!showModel)}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",

            width: "100%",
          }}>
          <Text
            style={{
              alignItems: "center",
              fontSize: 15,
              fontWeight: "bold",
              fontStyle: "italic",
            }}>
            CÁC ĐIỂM LÊN XE
          </Text>
        </View>

        <View
          style={{ flexDirection: "column", marginLeft: 10, marginTop: 20 }}>
          <FlatList
            data={placeFrom.busStation}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setBusLocation(item);
                    SetShowModel(!showModel);
                  }}>
                  <View
                    style={[
                      styles.viewPlace,
                      {
                        borderBottomWidth: 0.5,
                        borderBottomColor: "gray",
                        paddingBottom: 10,
                      },
                    ]}>
                    <View style={{ width: "95%" }} key={index}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "black",
                          marginLeft: 15,
                          fontStyle: "italic",
                          color: "gray",
                        }}>
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
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalSelectOption;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 280,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    marginBottom: 15,
    width: "100%",
  },
});
