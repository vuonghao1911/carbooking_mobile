import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { SetListChairs, SetClick2 } from "../../store/Actions";
import Contex from "../../store/Context";

export default Items = ({ item, navigation, setPrice }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical, listChairs } = state;
  const [pressOn, setPressOn] = React.useState(false);
  const [pressOn2, setPressOn2] = React.useState(false);
  const [selectedId, setSelectedId] = useState();
  var check = false;
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
    setPressOn2(!pressOn2);
    depatch(SetClick2(pressOn2));
  };

  React.useEffect(() => {
    listChairs.forEach((element) => {
      if (item._id == element._id) {
        setSelectedId(true);
      }
    });
    setPressOn2(!pressOn2);
    depatch(SetClick2(pressOn2));
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        handleSelectChair(item);
        setPrice(routeVehical.price * listChairs.length);
        depatch(SetClick2(pressOn2));
      }}>
      <View
        style={[
          item.status
            ? {
                flexDirection: "column",
                width: 60,
                height: 40,
                backgroundColor: "#D5D9DD",
                justifyContent: "space-around",

                padding: 0,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                margin: 3,
                marginRight: 55,
              }
            : pressOn
            ? styles.viewItemSelect
            : selectedId
            ? styles.viewItemSelect
            : styles.Item,
        ]}>
        <Text
          style={[
            pressOn || selectedId
              ? { textAlign: "center", color: "white", fontWeight: "bold" }
              : styles.textSeats,
          ]}>
          {item.seats}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Item: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 60,
    height: 40,
    backgroundColor: "#DEF3FF",
    justifyContent: "space-around",

    padding: 0,
    borderWidth: 1,
    borderColor: "#65959C",
    borderRadius: 10,
    margin: 3,
    marginRight: 55,
  },
  textSeats: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  viewItemSelect: {
    flexDirection: "column",
    width: 60,
    height: 40,
    backgroundColor: "",
    justifyContent: "space-around",
    backgroundColor: "orange",
    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 10,
    margin: 3,
    marginRight: 55,
  },
});
