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
  KeyboardAvoidingView,
  ToastAndroid,
  ScrollView,
} from "react-native";

import { TextInput } from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";

import { SetUser, SetBusStation, SetTicketUserInfo } from "../store/Actions";
import Contex from "../store/Context";
import userApi from "../api/userApi";

export default ChangePassWord = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, listChairs, placeTo, placeFrom, routeVehical } = state;

  const [pass, setPass] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [passConfirm, setPassConfirm] = React.useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisibleNew, setPasswordVisibleNew] = useState(true);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(true);
  const ChangePass = async () => {
    try {
      if (pass.length === 0) {
        ToastAndroid.showWithGravity(
          "Mật khẩu không được rỗng",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        return;
      } else if (newPass.length === 0) {
        ToastAndroid.showWithGravity(
          "Mật khẩu mới không được rỗng",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        return;
      } else if (passConfirm.length === 0) {
        ToastAndroid.showWithGravity(
          "Mật khẩu không được rỗng",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        return;
      } else if (passConfirm !== newPass) {
        ToastAndroid.showWithGravity(
          "Mật khẩu không khớp",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        return;
      }

      const { checkChangePass } = await userApi.changePassWord(
        user.phoneNumber,
        newPass,
        pass
      );
      if (checkChangePass) {
        console.log("success");
        setNewPass("");
        setPass("");
        setPassConfirm("");
        ToastAndroid.showWithGravity(
          "Đổi mật khẩu thành công",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        //navigation.navigate("Second");
      } else {
        ToastAndroid.showWithGravity(
          "Mật khẩu cũ không đúng",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      }

      console.log(checkChangePass);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{ backgroundColor: "white", padding: 15, marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 20,

                color: "black",
                marginBottom: 20,
                fontWeight: "bold",
              }}>
              Đổi mật khẩu
            </Text>
            <View style={{ flexDirection: "column", marginBottom: 30 }}>
              <TextInput
                style={styles.input}
                value={pass}
                label="Mật khẩu cũ"
                theme={{
                  colors: {
                    placeholder: "#694fad",
                  },
                }}
                secureTextEntry={passwordVisible}
                underlineColor="#694fad"
                activeUnderlineColor="gray"
                right={
                  <TextInput.Icon
                    name={passwordVisible ? "eye" : "eye-off"}
                    color={"#694fad"}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
                onChangeText={(text) => {
                  setPass(text);
                }}
              />
            </View>
            <View style={{ flexDirection: "column", marginBottom: 30 }}>
              <TextInput
                label="Mật khẩu mới"
                value={newPass}
                theme={{
                  colors: {
                    placeholder: "#694fad",
                  },
                }}
                style={styles.input}
                secureTextEntry={passwordVisibleNew}
                underlineColor="#694fad"
                activeUnderlineColor="gray"
                right={
                  <TextInput.Icon
                    name={passwordVisible ? "eye" : "eye-off"}
                    color={"#694fad"}
                    onPress={() => setPasswordVisibleNew(!passwordVisibleNew)}
                  />
                }
                onChangeText={(text) => {
                  setNewPass(text);
                }}></TextInput>
            </View>
            <View style={{ flexDirection: "column" }}>
              <TextInput
                label="Nhập lại mật khẩu"
                value={passConfirm}
                theme={{
                  colors: {
                    placeholder: "#694fad",
                  },
                }}
                style={styles.input}
                secureTextEntry={passwordVisibleConfirm}
                underlineColor="#694fad"
                activeUnderlineColor="gray"
                right={
                  <TextInput.Icon
                    color={"#694fad"}
                    name={passwordVisible ? "eye" : "eye-off"}
                    onPress={() =>
                      setPasswordVisibleConfirm(!passwordVisibleConfirm)
                    }
                  />
                }
                onChangeText={(text) => {
                  setPassConfirm(text);
                }}></TextInput>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={[
                styles.viewSearch,
                { borderWidth: 1, borderColor: "#694fad" },
              ]}
              onPress={ChangePass}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#694fad",
                    fontWeight: "bold",
                  }}>
                  Đổi Mật Khẩu
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  viewPrice: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "orange",
    width: "50%",
    height: 30,
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
  },
  textSeats: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    border: "none",
    borderRadius: 7,
    paddingLeft: 10,
    height: 50,
    // backgroundColor: "#dcdee3",
    color: "black",
    backgroundColor: "white",
    fontSize: 15,

    borderBottomColor: "#D86A23",
  },
  viewInfo: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 180,
    marginBottom: 20,
  },
  viewSearch: {
    width: "80%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,

    marginTop: 15,
    height: 50,
  },
});
