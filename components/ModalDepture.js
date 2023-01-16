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
  setDepture,
  selectedIdDep,
  setSelectedIdDep,
}) => {
  const [depture, setDept] = useState([
    { name: "Ben Tre", id: 1 },
    { name: "TpHcm", id: 2 },
    { name: "Ha Noi", id: 3 },
    { name: "Da Nang", id: 4 },
    { name: "Quang Ngai", id: 5 },
  ]);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedIdDep ? "#D86A23" : "white";
    const color = item.id === selectedIdDep ? "white" : "black";

    return (
      <Items
        item={item}
        onPress={() => {
          setSelectedIdDep(item.id);
          setModalVisible(!modalVisible);
          setDepture(item);
          console.log(item.name);
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
              marginLeft: 125,
            }}>
            Chọn nơi đi
          </Text>
        </View>
        <Text style={{ fontSize: 15, margin: 10, fontWeight: "bold" }}>
          Danh sách nơi đi
        </Text>
        <FlatList
          data={depture}
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
    alignContent: "center",
    justifyContent: "flex-start",
    height: 45,
    backgroundColor: "#D86A23",
    marginBottom: 10,
    padding: 5,
  },
});

export default ModalDepture;
