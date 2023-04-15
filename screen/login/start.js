import React, { useState } from "react";
import userApi from "../../api/userApi";

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

import { onAuthStateChanged } from "firebase/auth";
import { authetication } from "../../fireBaseConfig";
import { SetUser, SetVetificaitonId, SetCheckLogin } from "../../store/Actions";
import Contex from "../../store/Context";
export default Start = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, vetificaitonId } = state;

  React.useEffect(() => {
    // const getListCar = async () => {
    //   try {
    //     const result = await routeApi.getCar("63b2e4adeaca88ce6a368a22");
    //   } catch (error) {
    //     console.log("Failed to fetch : ", error);
    //   }
    // };
    // getListCar();

    const unregisterAuthObserver = onAuthStateChanged(authetication, (u) => {
      try {
        if (u) {
          const getUser = async () => {
            const phoneString = u.phoneNumber;
            const phoneNumber = "0" + phoneString.substring(3, 12);

            const user = await userApi.getUserByPhone(phoneNumber);

            depatch(SetUser(user.customer));
            navigation.navigate("Second");
          };
          getUser();
        } else {
          console.log("Failed to");
        }
      } catch (error) {
        console.log(error);
      }
    });
    return () => unregisterAuthObserver();
  }, []);

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
        onPress={() => navigation.navigate("InStart")}
        // onPress={() => navigation.navigate("Second")}
      >
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
