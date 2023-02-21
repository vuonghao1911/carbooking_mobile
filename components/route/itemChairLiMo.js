import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import { SetListChairs } from "../../store/Actions";
import Contex from "../../store/Context";

export default Items = ({ item, navigation, setPrice }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical, listChairs } = state;
  const [pressOn, setPressOn] = React.useState(false);
  const [selectedId, setSelectedId] = useState();

  const removeElement = (array, elem) => {
    var index = array.indexOf(elem);
    if (index > -1) {
      array.splice(index, 1);
      depatch(SetListChairs(array));
    }
  };
  const backgroundColor = item.id === selectedId ? "#E3FAF4" : "#1FADD8";

  const handleSelectChair = (item) => {
    const arrayChair = [];
    if (item.status) {
      return;
    } else if (pressOn) {
      removeElement(listChairs, item);
      console.log("list", listChairs);
    } else if (selectedId) {
      removeElement(listChairs, item);
      setSelectedId(!selectedId);
    } else {
      if (listChairs.length > 0) {
        if (listChairs.length == 5) {
          return;
        } else {
          listChairs.forEach((element) => {
            arrayChair.push(element);
          });
          arrayChair.push(item);
          depatch(SetListChairs(arrayChair));
        }
      } else {
        arrayChair.push(item);
        depatch(SetListChairs(arrayChair));
      }

      console.log("list", item._id);
    }
    if (selectedId) {
      setPressOn(false);
    } else {
      setPressOn(!pressOn);
    }
  };

  React.useEffect(() => {
    listChairs.forEach((element) => {
      if (item.id === element.id) {
        setSelectedId(true);
      }
    });
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        handleSelectChair(item);
        setPrice(routeVehical.price * listChairs.length);
      }}>
      <View
        style={[
          item.status
            ? {
                flexDirection: "column",
                width: 80,

                height: 45,
                backgroundColor: "#163E69",
                justifyContent: "space-around",

                padding: 0,
                borderWidth: 0,
                borderColor: "#E3FAF4",
                borderRadius: 10,
                margin: 5,
                marginRight: 25,
              }
            : pressOn
            ? styles.viewItemSelect
            : selectedId
            ? styles.viewItemSelect
            : styles.Item,
        ]}>
        <Text style={styles.textSeats}>{item.seats}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Item: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 80,
    height: 45,
    backgroundColor: "#1FADD8",
    justifyContent: "space-around",

    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 10,
    margin: 5,
    marginRight: 25,
  },
  textSeats: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  viewItemSelect: {
    flexDirection: "column",
    width: 80,
    height: 45,
    backgroundColor: "",
    justifyContent: "space-around",
    backgroundColor: "orange",
    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 10,
    margin: 5,
    marginRight: 25,
  },
});
