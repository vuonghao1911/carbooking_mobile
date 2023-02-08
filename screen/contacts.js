import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { ListTicket } from "../data/dataTest";
import Ionicons from "react-native-vector-icons/Ionicons";
import ItemHistoryTicket from "../components/route/historyTicket";
import { SetUser, SetVetificaitonId, SetCheckLogin } from "../store/Actions";
import Contex from "../store/Context";
const CreateContactsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            marginTop: 80,
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 110,
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}>
            Lich su mua ve
          </Text>
        </View>
      </View>

      <View>
        <FlatList
          data={ListTicket}
          renderItem={({ item }) => (
            <ItemHistoryTicket item={item} navigation={navigation} />
          )}
          // keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default CreateContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 30 : 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 150,
    width: "100%",
    backgroundColor: "#009387",
  },
  viewItemInfo: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
