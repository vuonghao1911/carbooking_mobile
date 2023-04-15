import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { SetListChairs, SetClick } from "../../store/Actions";
import Contex from "../../store/Context";

export default Items = ({ item, navigation, setPrice }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical, listChairs } = state;
  const [pressOn, setPressOn] = React.useState(false);
  const [selectedId, setSelectedId] = useState();
  const [spaceChair, setSpaceChair] = useState();
  const [lastSeat, setLastSeat] = useState();

  const removeElement = (array, elem) => {
    var index = array.indexOf(elem);
    if (index > -1) {
      array.splice(index, 1);
      depatch(SetListChairs(array));
    }
  };

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
      if (item._id === element._id) {
        setSelectedId(true);
      }
    });

    if (
      item.seats === "02" ||
      item.seats === "06" ||
      item.seats === "10" ||
      item.seats === "14" ||
      item.seats === "18"
    ) {
      setSpaceChair(true);
    }
    if (
      item.seats === "21" ||
      item.seats === "22" ||
      item.seats === "23" ||
      item.seats === "24"
    ) {
      setLastSeat(true);
    }
  }, []);

  return (
    <TouchableOpacity
      disabled={item.status}
      onPress={() => {
        handleSelectChair(item);
        setPrice(routeVehical.price * listChairs.length);
        depatch(SetClick(!pressOn));
      }}>
      <View
        style={[
          spaceChair
            ? item.status
              ? {
                  flexDirection: "column",
                  width: 60,

                  height: 45,
                  backgroundColor: "#D5D9DD",
                  justifyContent: "space-around",

                  padding: 0,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 10,
                  margin: 5,
                  marginRight: 45,
                }
              : pressOn
              ? styles.ItemSelectSpace
              : styles.ItemSpace
            : lastSeat
            ? item.status
              ? {
                  flexDirection: "column",
                  width: 75,

                  height: 45,
                  backgroundColor: "#D5D9DD",
                  justifyContent: "space-around",

                  padding: 0,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 10,
                  margin: 3,
                }
              : pressOn
              ? styles.viewItemSelectLastRow
              : styles.ItemLastRow
            : item.status
            ? {
                flexDirection: "column",
                width: 60,

                height: 45,
                backgroundColor: "#D5D9DD",
                justifyContent: "space-around",

                padding: 0,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                margin: 5,
              }
            : pressOn
            ? styles.viewItemSelect
            : styles.Item,
        ]}>
        <Text
          style={[
            pressOn
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
    height: 45,
    backgroundColor: "#DEF3FF",
    justifyContent: "space-around",

    borderWidth: 1,
    borderColor: "#65959C",
    borderRadius: 10,
    margin: 5,
  },
  ItemLastRow: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 75,
    height: 45,
    backgroundColor: "#DEF3FF",
    justifyContent: "space-around",

    borderWidth: 1,
    borderColor: "#65959C",
    borderRadius: 10,
    margin: 3,
  },
  textSeats: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  viewItemSelect: {
    flexDirection: "column",
    width: 60,
    height: 45,
    backgroundColor: "orange",
    justifyContent: "space-around",

    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 10,
    margin: 5,
  },
  viewItemSelectLastRow: {
    flexDirection: "column",
    width: 75,
    height: 45,
    backgroundColor: "orange",
    justifyContent: "space-around",

    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 10,
    margin: 3,
  },
  ItemSpace: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 60,
    height: 45,
    backgroundColor: "#DEF3FF",
    justifyContent: "space-around",

    borderWidth: 1,
    borderColor: "#65959C",
    borderRadius: 10,
    margin: 5,
    marginRight: 45,
  },
  ItemSelectSpace: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 60,
    height: 45,
    backgroundColor: "orange",
    justifyContent: "space-around",

    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 10,
    margin: 5,
    marginRight: 45,
  },
});
