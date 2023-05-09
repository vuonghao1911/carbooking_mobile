import React, { useState, useEffect, useRef, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import routeApi from "../../api/routeApi";
import { firebaseConfig } from "../../fireBaseConfig";
import firebase from "firebase/compat/app";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import {
  SetUser,
  SetVetificaitonId,
  SetCheckLogin,
  SetCheckForgotPassword,
} from "../../store/Actions";
import Contex from "../../store/Context";

const LoginScreen = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, vetificaitonId } = state;

  var applicationVerifier = useRef(null);
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setSDT] = useState("");
  const [passWord, setPassword] = useState("");

  const signInWithPhoneNumber = async (phoneNumber) => {
    const login = await routeApi.login(passWord, code);
    console.log(login.checklogin);
    depatch(SetCheckLogin(true));
    depatch(SetCheckForgotPassword(false));
    if (login.checklogin) {
      if (login.role) {
        ToastAndroid.showWithGravity(
          "Tai khoan khong hop le",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      } else {
        const confirmation = new firebase.auth.PhoneAuthProvider();
        console.log("conf", phoneNumber);
        confirmation
          .verifyPhoneNumber(phoneNumber, applicationVerifier.current)
          .then((result) => {
            setConfirm(result);
            depatch(SetVetificaitonId(result));
            depatch(SetUser(login.user));
            navigation.navigate("VetifyCode");
            setSDT("");
          })
          .catch((error) => console.log("error", error));
        console.log("conf", vetificaitonId);
      }
    } else {
      ToastAndroid.showWithGravity(
        "Mật khẩu hoặc tài khoản không chính xác",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={applicationVerifier}
          firebaseConfig={firebaseConfig}
          onVerify={(token) => setRecaptchaToken(token)}
        />
        <View style={styles.image}>
          <Text
            style={{
              marginBottom: 50,
              marginTop: 120,
              textAlign: "center",
              fontSize: 45,
              fontWeight: "bold",
              color: "#D86A23",
            }}>
            ĐĂNG NHẬP
          </Text>
          <View style={styles.box}>
            <View>
              <Text style={styles.name_label}>Số điện thoại</Text>
              <TextInput
                placeholder="Số điện thoại"
                style={styles.input}
                value={code}
                keyboardType="number-pad"
                onChangeText={(text) => setSDT(text)}></TextInput>
            </View>
            <View>
              <Text style={styles.name_label}>Mật khẩu:</Text>
              <TextInput
                secureTextEntry={true}
                placeholder="Mật khẩu"
                style={styles.input}
                onChangeText={(text) => setPassword(text)}></TextInput>
            </View>
            <View style={styles.styleLoginBtn}>
              <Button
                color="#D86A23" //button color
                onPress={() => signInWithPhoneNumber("+84 " + code)}
                //onPress={() => navigation.navigate("Second")}
                title="Login"
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              depatch(SetCheckForgotPassword(true));
              navigation.navigate("inNumber");
            }}>
            <Text
              style={{
                textAlign: "center",
                textDecorationLine: "underline",
                fontSize: 15,
                marginTop: 10,
                fontStyle: "italic",
              }}>
              Quên mật khẩu ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  image: {
    marginTop: 40,
    height: "100%",
    textAlign: "center",

    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  box: {
    padding: 20,
    backgroundColor: "#ffffff",
    width: "auto",
    height: "auto",
    borderRadius: 10,
    shadowColor: "#D86A23",
    shadowRadius: 10,
    elevation: 20,
    borderWidth: 1,
    borderColor: "#D86A23",
  },
  login: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
  },
  input: {
    border: "none",
    borderRadius: 7,
    paddingLeft: 10,
    height: 50,
    // backgroundColor: "#dcdee3",
    color: "black",
    fontWeight: "500",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D86A23",
  },
  name_label: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: "#D86A23",
  },
  styleLoginBtn: {
    width: 290,
    //height: 50,
    marginTop: 30,
    marginLeft: 0,
    marginRight: 50,
    // borderWidth: 1,
    borderRadius: 20,
    borderColor: "#0688FE", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },
});
export default LoginScreen;
