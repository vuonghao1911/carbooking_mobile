import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Linking,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
const CreateSettingScreen = () => (
  <View style={styles.container}>
    <Text
      onPress={() => {
        Linking.openURL(
          "https://qcgateway.zalopay.vn/pay?order=eyJhcHBpZCI6MjU1MywienB0cmFuc3Rva2VuIjoiWkJ0MENyQ1lWIn0%3D"
        );
      }}>
      Setting
    </Text>

    <QRCode style value="http://localhost:5005/places/all/getPlace" />
  </View>
);

export default CreateSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
