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
import "intl";
import "intl/locale-data/jsonp/en";
import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import {
  SetUser,
  SetVetificaitonId,
  SetCheckLogin,
  SetListChairs,
} from "../../store/Actions";
import Contex from "../../store/Context";
import { listChair, listChairLiMo } from "../../data/dataTest";
import ItemChair from "../../components/route/ItemChair";
import ItemChairLiMo from "../../components/route/itemChairLiMo";
import ItemChairLiMoSe from "../../components/route/itemChairLiMoSecond";

export default SelectChair = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical, listChairs } = state;
  const [price, setPrice] = React.useState();

  console.log("chair", price);
  const listFirstFloor = listChairLiMo.slice(0, listChairLiMo.length / 2);
  const listSecondFloor = listChairLiMo.slice(
    listChairLiMo.length / 2,
    listChairLiMo.length
  );

  const [typing, setTyping] = useState("Floor1");

  React.useEffect(() => {
    depatch(SetListChairs([]));
  }, [routeVehical]);

  return (
    <View style={styles.container}>
      <View
        style={
          {
            // backgroundColor: "black",
            // height: 300,
          }
        }>
        <View style={styles.viewInFo}>
          <View
            style={{
              flexDirection: "column",
              //alignContent: "center",
              alignItems: "center",
              marginLeft: 20,
            }}>
            <Text style={{ fontSize: 25, color: "black" }}>
              {routeVehical.departure} - {routeVehical.destination}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: 15,
                color: "#D86A23",
              }}>
              {routeVehical.startTime} - {routeVehical.endTime}
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#003104",
          marginLeft: 20,
        }}>
        {`Chọn ghế (` + `${listChairs.length}` + `/5)`}
      </Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}>
        <View style={styles.viewBody}>
          {routeVehical.carType == "Xe Thuong" ? (
            <FlatList
              data={listChair}
              numColumns={4}
              columnWrapperStyle={styles.row}
              renderItem={({ item }) => (
                <ItemChair
                  item={item}
                  navigation={navigation}
                  setPrice={setPrice}
                />
              )}
            />
          ) : (
            <View style={{ marginLeft: 10 }}>
              <View style={styles.viewFloor}>
                <TouchableOpacity
                  onPress={() => {
                    setTyping("Floor1");
                  }}>
                  {typing === "Floor1" ? (
                    <Text style={styles.text2}>TANG 1</Text>
                  ) : (
                    <Text style={styles.text1}>TANG 1</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setTyping("Floor2");
                  }}>
                  {typing === "Floor2" ? (
                    <Text style={styles.text2}>TANG 2</Text>
                  ) : (
                    <Text style={styles.text1}>TANG 2</Text>
                  )}
                </TouchableOpacity>
              </View>

              {typing === "Floor1" ? (
                <FlatList
                  data={listFirstFloor}
                  numColumns={3}
                  columnWrapperStyle={styles.row}
                  renderItem={({ item }) => (
                    <ItemChairLiMo
                      item={item}
                      navigation={navigation}
                      setPrice={setPrice}
                    />
                  )}
                />
              ) : (
                <FlatList
                  data={listSecondFloor}
                  numColumns={3}
                  columnWrapperStyle={styles.row}
                  renderItem={({ item }) => (
                    <ItemChairLiMoSe
                      item={item}
                      navigation={navigation}
                      setPrice={setPrice}
                    />
                  )}
                />
              )}
            </View>
          )}
        </View>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <View style={styles.viewInFoRoute}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}>
            <Ionicons
              style={{ marginLeft: 15 }}
              name="square"
              size={18}
              color={"#DEF3FF"}
            />
            <Text style={styles.styteTextChair}>Còn trống</Text>
            <Ionicons
              style={{ marginLeft: 20 }}
              name="square"
              size={18}
              color={"orange"}
            />
            <Text style={styles.styteTextChair}>Đang chọn</Text>
            <Ionicons
              style={{ marginLeft: 20 }}
              name="square"
              size={18}
              color={"#D5D9DD"}
            />
            <Text style={styles.styteTextChair}>Đã đặt</Text>
          </View>
          <View style={styles.viewPrice}>
            <Text style={{ fontSize: 17 }}>Tiền tạm tính: </Text>
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 5 }}>
              {new Intl.NumberFormat("en-US").format(
                `${routeVehical.price * listChairs.length}`
              )}{" "}
              d
            </Text>
          </View>
          <View style={styles.viewPrice}>
            <Text style={{ fontStyle: "italic", color: "gray" }}>
              *Khuyến mãi:
            </Text>
            <Text style={{ fontStyle: "italic", color: "gray", marginLeft: 5 }}>
              Mua trên 3 ve giam 10% giá hóa đơn tối đa 200.000đ
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewSearch}
          onPress={() => navigation.navigate("routeDetails")}>
          <View>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              Tiếp Theo
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  viewInFo: {
    margin: 10,
    //  flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
  },

  viewSearch: {
    backgroundColor: "#D86A23",
    width: "70%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,

    marginTop: 20,
    height: 50,
  },

  viewBody: {
    height: 350,
    width: "85%",

    marginTop: 20,
  },
  viewInFoRoute: {
    flexDirection: "column",
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
  },
  styteTextChair: {
    fontStyle: "italic",
    color: "gray",
    marginLeft: 5,
  },
  viewPrice: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    width: "70%",
  },
  row: {},
  viewFloor: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: -20,
  },
  text1: {
    fontSize: 16,
  },

  text2: {
    fontSize: 16,
    color: "#D86A23",
  },
});
