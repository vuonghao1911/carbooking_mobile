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

const ModalDestination = ({
  modalVisibleDes,
  setModalVisibleDes,
  setDestination,
  setSelectedIdDes,
  selectedIdDes,
}) => {
  const [depture, setDept] = useState([
    {
      name: "Ben Tre",
      id: 1,
      busStation: [
        {
          location:
            "Bến xe Miền Tây(số 395 Kinh Dương Vương, Phường An Lạc, Quận Bình Tân, TP.HCM)",
          _id: {
            $oid: "63da8c5cee09e7dba6d76fb2",
          },
        },
        {
          location:
            "Bến xe Miền Đông(số 501 đường Hoàng Hữu Nam, Phường Long Bình, Quận 9, Tp. Thủ Đức)",
          _id: {
            $oid: "63da8c5cee09e7dba6d76fb3",
          },
        },
        {
          location:
            "Bến xe An Sương(số 720, quốc lộ 1A, khu phố 3B, phường Thạnh Lộc, Quận 12, TPHCM)",
          _id: {
            $oid: "63da8c5cee09e7dba6d76fb4",
          },
        },
      ],
    },
    { name: "TpHcm", id: 2 },
    { name: "Ha Noi", id: 3 },
    { name: "Da Nang", id: 4 },
    { name: "Quang Ngai", id: 5 },
  ]);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedIdDes ? "#D86A23" : "white";
    const color = item.id === selectedIdDes ? "white" : "black";

    return (
      <Items
        item={item}
        onPress={() => {
          setSelectedIdDes(item.id);
          setModalVisibleDes(!modalVisibleDes);
          setDestination(item);
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
        visible={modalVisibleDes}
        onRequestClose={() => {
          setModalVisibleDes(!modalVisibleDes);
        }}>
        <View style={styles.viewBar}>
          <TouchableOpacity
            onPress={() => setModalVisibleDes(!modalVisibleDes)}>
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
            Chọn nơi dến
          </Text>
        </View>
        <Text style={{ fontSize: 15, margin: 10, fontWeight: "bold" }}>
          Danh sách nơi đến
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

export default ModalDestination;
