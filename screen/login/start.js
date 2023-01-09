import React, { useState } from "react";
import routeApi from "../../api/routeApi";

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
} from "react-native";

export default Start = ({ navigation }) => {
  React.useEffect(() => {
    const getListCar = async () => {
      try {
        const result = await routeApi.getCar("63b2e4adeaca88ce6a368a22");
        console.log("result", result);
      } catch (error) {
        console.log("Failed to fetch : ", error);
      }
    };

    getListCar();
  });

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.viewBot}>
          <View style={{ width: 350, height: 100 }}>
            <Text
              style={{
                fontSize: 25,

                fontWeight: "bold",
                textAlign: "center",
                color: "#9506D8",
              }}>
              CHÀO MỪNG ĐẾN VỚI FURISAS
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          style={{ height: 350, width: 400, borderRadius: 100 }}
          source={{
            uri: "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135058/360_F_71848853_001bQi5QfpAOahc3ZPr42IL9j20NBlB1_cuz6wn.png",
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => navigation.navigate("InStart")}>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
          BẮT ĐẦU
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    flex: 1,
    /// justifyContent: "center",

    justifyContent: "flex-end",
  },
  viewBot: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  viewButton: {
    marginTop: 20,
    width: 300,
    height: 50,
    backgroundColor: "#D86A23",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 100,
  },
});
