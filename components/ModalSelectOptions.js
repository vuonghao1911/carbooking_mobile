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
const ModalSelectOption = ({ showModel, setText, SetShowModel }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, userSearched, idConversation, userChatting } = state;
  const [showModelCa, SetShowModelCa] = useState(false);

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
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",

            width: "100%",
          }}>
          <Text
            style={{ alignItems: "center", fontSize: 20, fontWeight: "bold" }}>
            Chon muc
          </Text>
        </View>

        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <TouchableOpacity onPress={() => SetShowModelCa(!showModelCa)}>
            <View style={styles.viewPlace}>
              <Ionicons name="trash" color={"#009387"} size={27} />
              <Text style={{ fontSize: 16, color: "black", marginLeft: 15 }}>
                Huy ve
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.viewPlace}>
              <Ionicons name="refresh-circle" color={"#009387"} size={30} />
              <Text style={{ fontSize: 16, color: "black", marginLeft: 15 }}>
                Doi ve
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SetShowModel(!showModel)}>
            <View style={styles.viewPlace}>
              <Ionicons name="close" color={"red"} size={30} />
              <Text style={{ fontSize: 16, color: "black", marginLeft: 15 }}>
                Thoat
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
    height: 200,
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
