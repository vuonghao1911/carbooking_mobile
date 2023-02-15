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
import ModalSelectOption from "./ModalSelectOptions";
import Contex from "../store/Context";
const IconOption = ({}) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, userSearched, idConversation, userChatting } = state;

  const [showModel, SetShowModel] = useState(false);

  const date = moment(new Date()).format("yyyy-MM-DD");

  return (
    <TouchableOpacity onPress={() => SetShowModel(!showModel)}>
      <ModalSelectOption SetShowModel={SetShowModel} showModel={showModel} />
      <Ionicons name="ellipsis-horizontal" size={20} color={"white"} />
    </TouchableOpacity>
  );
};

export default IconOption;
