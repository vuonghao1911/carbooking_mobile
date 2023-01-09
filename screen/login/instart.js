import React, { useState, useEffect, useRef, useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { firebaseConfig } from "../../fireBaseConfig";
import firebase from "firebase/compat/app";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { SetUser, SetVetificaitonId, SetCheckLogin } from "../../store/Actions";
import Contex from "../../store/Context";

const InStart = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);

  const { state, depatch } = React.useContext(Contex);
  const { user, vetificaitonId } = state;

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 350, width: 400, marginTop: -100 }}
        source={{
          uri: "https://res.cloudinary.com/ddlalxay6/image/upload/v1672135060/360_F_266909519_YCRZy0e3fPNHOXkPMDq3RSFyTN3BGAVe_u7skua.png",
        }}
      />
      <Text
        style={{
          //  marginBottom: 50,
          marginTop: -200,
          textAlign: "center",
          fontSize: 50,
          fontWeight: "bold",
          color: "#9506D8",
        }}>
        FURISAS
      </Text>

      <View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => {
            depatch(SetCheckLogin(true));
            navigation.navigate("Login");
          }}>
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            ĐĂNG NHẬP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewButtonRe}
          onPress={() => {
            depatch(SetCheckLogin(false));
            navigation.navigate("inNumber");
          }}>
          <Text style={{ fontSize: 18, color: "#9506D8", fontWeight: "bold" }}>
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
  },
  image: {
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

  login: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
  },

  name_label: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 12,
    fontWeight: "00",
  },
  viewButtonRe: {
    marginTop: 20,
    width: 300,
    height: 50,
    borderWidth: 1,
    //backgroundColor: "#D86A23",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9506D8",
    // marginTop: 100,
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
export default InStart;
