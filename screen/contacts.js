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

import Ionicons from "react-native-vector-icons/Ionicons";
import ItemHistoryTicket from "../components/route/historyTicket";
import { SetUser, SetVetificaitonId, SetCheckLogin } from "../store/Actions";
import Contex from "../store/Context";
import ticketApi from "../api/ticketApi";
import ItemHistoryRefundTicket from "../components/route/historyRefundTicket";

const CreateContactsScreen = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, vetificaitonId, placeTo, ticket } = state;
  const [typing, setTyping] = React.useState("Floor1");

  const [listTicketUser, setListTicketUser] = React.useState([]);
  const [listTickeRefundtUser, setListTickeRefundtUser] = React.useState([]);
  React.useEffect(() => {
    const getListTicket = async () => {
      try {
        const result = await ticketApi.getListTicket(user._id);

        setListTicketUser(result.data);
      } catch (error) {
        console.log("Failed to fetch : ", error);
      }
    };

    const getListTicketRefund = async () => {
      try {
        const result = await ticketApi.getListTicketRefund(user._id);

        setListTickeRefundtUser(result.data);
      } catch (error) {
        console.log("Failed to fetch : ", error);
      }
    };

    getListTicket();
    getListTicketRefund();
  }, [placeTo, ticket]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            marginTop: 120,
            padding: 10,
          }}>
          <Text
            style={{
              marginLeft: 140,
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}>
            Lịch sử mua vé
          </Text>
        </View>
      </View>

      <View style={styles.viewFloor}>
        <TouchableOpacity
          onPress={() => {
            setTyping("Floor1");
          }}>
          {typing === "Floor1" ? (
            <View
              style={{
                height: 40,
                width: 120,
                backgroundColor: "#009387",
                borderRadius: 20,
              }}>
              <Text style={styles.text2}>VÉ ĐÃ MUA</Text>
            </View>
          ) : (
            <View
              style={{
                height: 40,
                width: 120,
                backgroundColor: "#D5D9DD",
                borderRadius: 20,
              }}>
              <Text style={styles.text1}>VÉ ĐÃ MUA</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTyping("Floor2");
          }}>
          {typing === "Floor2" ? (
            <View
              style={{
                height: 40,
                width: 120,
                backgroundColor: "#009387",
                borderRadius: 20,
              }}>
              <Text style={styles.text2}>VÉ ĐÃ HỦY</Text>
            </View>
          ) : (
            <View
              style={{
                height: 40,
                width: 120,
                backgroundColor: "#D5D9DD",
                borderRadius: 20,
              }}>
              <Text style={styles.text1}>VÉ ĐÃ HỦY</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View>
        {typing === "Floor1" ? (
          <FlatList
            data={listTicketUser}
            renderItem={({ item }) => (
              <ItemHistoryTicket item={item} navigation={navigation} />
            )}
            // keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            data={listTickeRefundtUser}
            renderItem={({ item }) => (
              <ItemHistoryRefundTicket item={item} navigation={navigation} />
            )}
            // keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default CreateContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    // marginTop: Platform.OS === "ios" ? 30 : 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 200,
    width: "100%",
    backgroundColor: "#009387",
  },
  viewFloor: {
    height: 50,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#009387",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text1: {
    fontSize: 16,
    color: "gray",

    lineHeight: 40,
    textAlign: "center",
  },

  text2: {
    fontSize: 16,
    color: "white",

    lineHeight: 40,
    textAlign: "center",
  },
});
