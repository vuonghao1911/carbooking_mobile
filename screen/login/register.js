import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import routeApi from "../../api/routeApi";

import Contex from "../../store/Context";
import { SetUser } from "../../store/Actions";

export default Register = ({ navigation }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const { state, depatch } = useContext(Contex);
  const { user, phoneNumber } = state;

  console.log("phone number: ", phoneNumber);

  const register = async () => {
    try {
      if (lastName.length === 0) {
        Alert.alert("Tên không được rỗng");
        return;
      } else if (password !== repassword) {
        Alert.alert("Mật khẩu không được rỗng");
        return;
      }
      const customer = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        passWord: password,
        role: false,
      };

      const account = await routeApi.register(customer);
      if (account.checkRegister) {
        navigation.navigate("Second");
        depatch(SetUser(account.user));
      } else {
        Alert.alert("SDT đã được đăng ký tài khoản");
        return;
      }

      console.log(account);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 34,
              marginBottom: 40,
              fontWeight: "500",
              textAlign: "center",
              color: "#D86A23",
            }}>
            ĐĂNG KÝ
          </Text>
          {/* Name */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Họ"
              placeholderTextColor="#9506D8"
              onChangeText={(text) => setfirstName(text)}></TextInput>
          </View>

          {/* Email */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Tên"
              placeholderTextColor="#9506D8"
              onChangeText={(text) => setLastName(text)}></TextInput>
          </View>

          {/* Password */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              secureTextEntry={true}
              placeholder=" Mật khẩu"
              placeholderTextColor="#9506D8"
              onChangeText={(text) => setPassword(text)}></TextInput>
          </View>

          {/* Password */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              secureTextEntry={true}
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor="#9506D8"
              onChangeText={(text) => setRepassword(text)}></TextInput>
          </View>

          {/* btn login */}
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.btn} onPress={() => register()}>
              <Text
                style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              textAlign: "center",
              marginTop: 6,
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text>Do you have a account?</Text>
            <Text style={{ marginLeft: 8 }}>Login Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topView: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    //  backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: -120,
  },
  header: {
    justifyContent: "center",
    height: 50,
    width: "100%",
    //marginTop: 0,
    // backgroundColor: "red",
    // marginBottom: 10,
  },
  headerBack: {
    marginLeft: 18,
    marginTop: 100,
    height: 40,
    width: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#D86A23",
  },

  body: {
    // flex: 1,
    marginTop: 40,
    width: "90%",
    marginTop: 100,
    // justifyContent: "center",
    //alignItems: "center",
  },

  viewInput: {
    height: 56,
    paddingVertical: 14,
    marginBottom: 30,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#9506D8",
  },

  btnView: {
    justifyContent: "center",
  },

  btn: {
    height: 50,
    marginBottom: 20,
    backgroundColor: "#D86A23",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
