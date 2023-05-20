import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase/compat/app";
import { SetUser, SetVetificaitonId, SetCheckLogin } from "../store/Actions";
import Contex from "../store/Context";
const CreateAboutScreen = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, vetificaitonId } = state;

  const handleClik = () => {
    Alert.alert("Xoa Tai khoan", `Bạn muốn xóa tai khoan?`, [
      {
        text: "Hủy",
        onPress: () => console.log("navigation", navigation),
        style: "cancel",
      },
      {
        text: "Đồng ý",
        onPress: () => {
          console.log("xoa");
        },
        style: "cancel",
      },
    ]);
  };

  const handleLogout = () => {
    Alert.alert("Đăng Xuất", `Bạn muốn đăng xuất khỏi ứng dụng`, [
      // {
      //   text: "Hủy",
      //   onPress: () => console.log("navigation", navigation),
      //   style: "cancel",
      // },
      {
        text: "Đồng ý",
        onPress: () => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              navigation.replace("InStart");
              depatch(SetUser(null));
            });
        },
        style: "default",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            //  marginTop: 20,
            padding: 10,
          }}>
          <Text
            style={{
              marginLeft: 160,
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}>
            Hồ Sơ
          </Text>
        </View>
      </View>

      <View style={styles.viewCustomization}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("updateProfile");
          }}>
          <View style={styles.viewItem}>
            <Ionicons name="person-circle" size={75} color={"#694fad"} />
            <View style={styles.viewCustomItem}>
              <View style={{ flexDirection: "column", padding: 10 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                    marginBottom: 5,
                  }}>
                  {user?.firstName} {user?.lastName}
                </Text>
                <Text style={{ fontSize: 17, color: "gray" }}>
                  {user?.phoneNumber}
                </Text>
              </View>

              <Ionicons
                style={{}}
                color={"#694fad"}
                name="chevron-forward-outline"
                size={25}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("changePass")}>
          <View style={styles.viewItem}>
            <Ionicons name="sync" size={23} color={"orange"} />
            <View style={styles.viewCustomItem}>
              <Text style={{ fontSize: 15 }}>Đổi mật khẩu</Text>
              <Ionicons
                style={{}}
                color={"#694fad"}
                name="chevron-forward-outline"
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          width: "85%",
          justifyContent: "flex-start",
          marginTop: 15,
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "normal",
            color: "gray",
          }}>
          Thông tin
        </Text>
      </View>

      <View style={styles.viewCustomization}>
        {/* <TouchableOpacity onPress={handleClik}>
          <View style={styles.viewItem}>
            <Ionicons name="remove-circle" size={23} color={"#8F4607"} />
            <View style={styles.viewCustomItem}>
              <Text style={{ fontSize: 15 }}>Xóa Tài Khoản</Text>
            </View>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.viewItem}>
            <Ionicons name="log-out" size={23} color={"#694fad"} />
            <View style={styles.viewCustomItem}>
              <Text style={{ fontSize: 15 }}>Đăng Xuất</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex", height: 20 }}></View>
    </View>
  );
};

export default CreateAboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: "#F0F2F5",
  },
  viewAvatar: {
    height: 110,
    width: 110,
    borderRadius: 60,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "white",
  },
  ViewTop: {
    display: "flex",
    flexDirection: "column",
    // height: 110,
    // width: 110,
    alignContent: "center",
    alignItems: "center",
  },
  viewListOpstion: {
    display: "flex",
    // padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  viewIcon: {
    display: "flex",
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#E4E6EB",
    alignItems: "center",
    alignContent: "center",
  },
  viewListIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
  viewCustomization: {
    // height: 200,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  viewItem: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 2,
  },
  viewCustomItem: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "blue",
    marginLeft: 20,
    borderBottomWidth: 0.5,
    padding: 10,
    borderBottomColor: "#E4E6EB",
    alignItems: "center",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 80,
    width: "100%",
    backgroundColor: "#694fad",
    marginBottom: 10,
  },
});
