import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Modal from "react-native-modal";

import Contex from "../store/Context";

const ModalSelectOption = ({
  showModel,
  setText,
  SetShowModel,
  navigation,
  data,
}) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, ticket } = state;

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
            Các khuyến mãi được áp dụng
          </Text>
        </View>

        <View
          style={{ flexDirection: "column", marginLeft: 10, marginTop: 20 }}>
          <View style={styles.viewPlace}>
            <View style={{ width: "95%" }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  marginLeft: 15,
                  fontStyle: "italic",
                }}>
                Khuyến mãi
              </Text>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={[
                    styles.viewPlace,
                    {
                      borderBottomWidth: 0.5,
                      borderBottomColor: "gray",
                      paddingBottom: 10,
                    },
                  ]}>
                  <View style={{ width: "95%" }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "black",
                        marginLeft: 15,
                        fontStyle: "italic",
                        color: "gray",
                      }}>
                      {item.promotionTitle}
                    </Text>
                  </View>
                </View>
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
    height: 250,
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
