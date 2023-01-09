import React, { useState } from "react";

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
import { firebaseConfig } from "../../fireBaseConfig";
import firebase from "firebase/compat/app";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import {
  SetUser,
  SetVetificaitonId,
  SetPhoneNumber,
} from "../../store/Actions";
import Contex from "../../store/Context";

export default InNumberPhone = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, vetificaitonId } = state;
  const [confirm, setConfirm] = useState(null);
  var applicationVerifier = React.useRef(null);
  const [phone, setPhone] = useState();

  const signInWithPhoneNumber = (phoneNumber) => {
    const confirmation = new firebase.auth.PhoneAuthProvider();
    console.log("conf", phoneNumber);
    confirmation
      .verifyPhoneNumber(phoneNumber, applicationVerifier.current)
      .then((result) => {
        setConfirm(result);
        depatch(SetVetificaitonId(result));
        depatch(SetPhoneNumber(phone));
        navigation.navigate("VetifyCode");
      })
      .catch((error) => console.log("error", error));
    console.log("conf", vetificaitonId);
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={applicationVerifier}
        firebaseConfig={firebaseConfig}
      />
      <View>
        <Image
          style={{ height: 400, width: 380, borderRadius: 100 }}
          source={{
            uri: "https://res.cloudinary.com/ddlalxay6/image/upload/v1672133976/84-843804_cartoon-clip-art-driver-hd-png-download_ezhpnf.png",
          }}
        />
      </View>
      <View>
        <TextInput
          placeholder="Số điện thoại"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => setPhone(text)}></TextInput>

        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => signInWithPhoneNumber("+84 " + phone)}
          // onPress={() => navigation.navigate("VetifyCode")}
        >
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            TIẾP THEO
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
    justifyContent: "space-evenly",
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
    backgroundColor: "#9506D8",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 100,
  },
  input: {
    border: "none",
    borderRadius: 7,
    paddingLeft: 10,
    height: 50,
    // backgroundColor: "#dcdee3",
    color: "#9506D8",
    fontWeight: "500",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#9506D8",
  },
});
