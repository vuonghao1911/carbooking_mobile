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
import { SetUser, SetVetificaitonId, SetCheckLogin } from "../../store/Actions";
import Contex from "../../store/Context";

export default SelectChair = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical } = state;

  console.log("route", routeVehical);

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
        {`Chọn ghế (` + `${routeVehical.intendTime}` + `/5)`}
      </Text>
      <View style={styles.viewBody}>
        <Swiper style={styles.wrapper} loop={true} autoplay={true}>
          <Image
            style={{ height: 350, width: 400, borderRadius: 100 }}
            source={{
              uri: "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135058/360_F_71848853_001bQi5QfpAOahc3ZPr42IL9j20NBlB1_cuz6wn.png",
            }}
          />
          <Image
            style={{ height: 350, width: 400, borderRadius: 100 }}
            source={{
              uri: "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135060/360_F_266909519_YCRZy0e3fPNHOXkPMDq3RSFyTN3BGAVe_u7skua.png",
            }}
          />
        </Swiper>
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
              color={"#1FADD8"}
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
              color={"#163E69"}
            />
            <Text style={styles.styteTextChair}>Đã đặt</Text>
          </View>
          <View style={styles.viewPrice}>
            <Text style={{ fontSize: 17 }}>Tiền tạm tính: </Text>
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 5 }}>
              {new Intl.NumberFormat("en-US").format(`${routeVehical.price}`)} d
            </Text>
          </View>
          <View style={styles.viewPrice}>
            <Text style={{ fontStyle: "italic", color: "gray" }}>
              *Khuyến mãi:
            </Text>
            <Text style={{ fontStyle: "italic", color: "gray", marginLeft: 5 }}>
              Mua 1 tang 1
            </Text>
          </View>
        </View>
        <View style={styles.viewSearch}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Tiếp Theo
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E3FAF4",
  },
  viewInFo: {
    margin: 15,
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

    marginBottom: 30,
    marginTop: 20,
    height: 50,
  },

  viewBody: {
    backgroundColor: "#E3FAF4",
    height: 400,
  },
  viewInFoRoute: {
    flexDirection: "column",
    height: 100,
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
  },
});
