import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  View,
} from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { firebaseConfig } from "../../fireBaseConfig";
import firebase from "firebase/compat/app";
import Contex from "../../store/Context";
import { SetUser, SetVetificaitonId } from "../../store/Actions";
const CELL_COUNT = 6;

const VeifyCode = ({ navigation }) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const { state, depatch } = React.useContext(Contex);
  const { user, vetificationId, checkLogin, checkForgotPassword } = state;
  console.log("value", vetificationId);
  console.log("CheckLogin", checkLogin);

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      vetificationId,
      value
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        console.log("result", result);
        if (checkForgotPassword) {
          navigation.navigate("forgotPass");
        } else {
          if (checkLogin) {
            navigation.navigate("Second");
          } else {
            navigation.replace("register");
          }
        }
      })
      .catch((error) => console.log("error", error));
    console.log("cre", credential);
    //let userData = auth().currentUser.linkWithCredential(credential);
    if (credential) {
      console.log("verity invalid");
    } else {
      console.log("verity false");
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Image
          style={{ height: 350, width: 350, marginTop: -100 }}
          source={{
            uri: "https://res.cloudinary.com/ddlalxay6/image/upload/v1672133960/pngtree-hand-painted-cartoon-family-driving-elements-png-image_4388170_w9lnmg.png",
          }}
        />
        <Text style={styles.title}>Nhập Mã Xác Thực</Text>
      </View>

      <CodeField
        ref={ref}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      <TouchableOpacity style={styles.viewButton} onPress={() => confirmCode()}>
        <Text
          style={{
            fontSize: 18,
            color: "#9506D8",
            textAlign: "center",
            fontWeight: "bold",
          }}>
          Xác Nhận
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VeifyCode;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    justifyContent: "space-evenly",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "orange",
    fontWeight: "bold",
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 0.8,
    borderColor: "#9506D8",
    textAlign: "center",
    color: "orange",
    fontWeight: "bold",
  },
  focusCell: {
    borderColor: "#000",
  },
  viewButton: {
    marginTop: 20,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    marginLeft: 30,
    borderColor: "#9506D8",
  },
});
