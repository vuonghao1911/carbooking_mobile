import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Contex from "../store/Context";

const Items = ({ item, onPress, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.viewItem, { backgroundColor }]}>
        <Text style={[{ marginLeft: 20, fontSize: 15 }, { color: textColor }]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ModalDepture = ({
  modalVisible,
  setModalVisible,
  setProvince,
  selectedIdProvince,
  setSelectedIdProvince,
  listData,
}) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, userSearched, idConversation, userChatting } = state;

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedIdProvince ? "#694fad" : "white";
    const color = item.id === selectedIdProvince ? "white" : "black";

    return (
      <Items
        item={item}
        onPress={() => {
          setSelectedIdProvince(item.id);
          setModalVisible(!modalVisible);
          setProvince(item);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  //   const press = (item) => {
  //     setSeleted(!selected);
  //     setModalVisible(!modalVisible);
  //     setDepture(item.name);
  //   };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.viewBar}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Ionicons name="chevron-back-outline" size={25} color={"white"} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 17,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              marginLeft: 145,
            }}>
            Địa Chỉ
          </Text>
        </View>
        <Text style={{ fontSize: 15, margin: 10, fontWeight: "bold" }}>
          Danh sách
        </Text>
        <FlatList
          data={listData}
          // renderItem={({ item }) => (
          //   <Items
          //     item={item}
          //     setDepture={setDepture}
          //     modalVisible={modalVisible}
          //     setModalVisible={setModalVisible}
          //   />
          // )}
          renderItem={renderItem}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  viewItem: {
    height: 50,
    borderBottomWidth: 0,
    borderBottomColor: "gray",
    justifyContent: "center",
  },
  viewBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 70,
    backgroundColor: "#694fad",
    marginBottom: 10,
    padding: 5,
  },
});

export default ModalDepture;
