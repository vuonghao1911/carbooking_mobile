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
import routeApi from "../api/routeApi";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SetTicket, SetPlaceTo } from "../store/Actions";
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

const ModalDestination = ({
  modalVisibleDes,
  setModalVisibleDes,
  setDestination,
  setSelectedIdDes,
  selectedIdDes,
}) => {
  const [depture, setDept] = useState([]);
  const { state, depatch } = React.useContext(Contex);
  const { placeFrom } = state;
  React.useEffect(() => {
    const getListPlace = async () => {
      try {
        const result = await routeApi.getListPlace();
        if (placeFrom) {
          for (let i = 0; i < result.data.length; i++) {
            if (result.data[i]._id.toString() == placeFrom._id.toString()) {
              result.data.splice(i, 1);
            }
          }
        }

        setDept(result.data);
      } catch (error) {
        console.log("Failed to fetch : ", error);
      }
    };

    getListPlace();
  }, [placeFrom]);
  const renderItem = ({ item }) => {
    const backgroundColor = item._id === selectedIdDes ? "#D86A23" : "white";
    const color = item._id === selectedIdDes ? "white" : "black";

    return (
      <Items
        item={item}
        onPress={() => {
          setSelectedIdDes(item._id);
          setModalVisibleDes(!modalVisibleDes);
          setDestination(item);
          depatch(SetPlaceTo(item));
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
