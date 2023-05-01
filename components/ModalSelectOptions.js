import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import moment from "moment";
import Modal from "react-native-modal";
import ModalCancelTicket from "./ModalCancelTicket";
import Contex from "../store/Context";

const ModalSelectOption = ({
  showModel,
  setText,
  SetShowModel,
  navigation,
}) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, ticket } = state;
  const [showModelCa, SetShowModelCa] = useState(false);
  const [disabled, setDisabled] = useState(false);

  React.useEffect(() => {
    if (new Date(ticket?.startDate) <= new Date()) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    console.log(ticket);
  }, [ticket]);
  const date = moment(new Date()).format("yyyy-MM-DD");

  return (
    <Modal
      isVisible={showModel}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
      animationIn={"fadeInUp"}
      animationOut={"slideOutDown"}
      onBackdropPress={() => SetShowModel(!showModel)}>
      <View style={styles.container}>
        <ModalCancelTicket
          showModel={showModelCa}
          SetShowModel={SetShowModelCa}
          showModelOption={showModel}
          SetShowModelOption={SetShowModel}
          navigation={navigation}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",

            width: "100%",
          }}>
          <Text
            style={{ alignItems: "center", fontSize: 20, fontWeight: "bold" }}>
            Chọn mục
          </Text>
        </View>

        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ticketDetails")}>
            <View style={styles.viewPlace}>
              <Ionicons name="information" color={"#009387"} size={30} />
              <Text style={{ fontSize: 16, color: "black", marginLeft: 15 }}>
                Chi Tiết
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SetShowModel(!showModel)}>
            <View style={styles.viewPlace}>
              <Ionicons name="close" color={"red"} size={30} />
              <Text style={{ fontSize: 16, color: "black", marginLeft: 15 }}>
                Thoát
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSelectOption;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 150,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    marginBottom: 15,
    width: "100%",
  },
});
