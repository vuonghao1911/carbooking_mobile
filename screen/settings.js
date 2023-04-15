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
import ItemDiscountPromotios from "../components/route/ItemDiscountPromotions";
import ItemAmountDiscount from "../components/route/ItemAmountDiscount";
import { SetUser, SetVetificaitonId, SetCheckLogin } from "../store/Actions";
import Contex from "../store/Context";
import promotionsApi from "../api/promotionsApi";
const CreateContactsScreen = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, vetificaitonId, placeTo } = state;

  const [listPromotions, setListPromotions] = React.useState([]);
  React.useEffect(() => {
    const getListPromotions = async () => {
      try {
        const result = await promotionsApi.getAllPromotions();

        setListPromotions(result);
      } catch (error) {
        console.log("Failed to fetch : ", error);
      }
    };

    getListPromotions();
  }, [placeTo]);
  const renderItems = ({ item }) => {
    if (item.percentDiscount) {
      return <ItemDiscountPromotios item={item} />;
    } else {
      return <ItemAmountDiscount item={item} />;
    }
  };
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
          <Text
            style={{
              marginLeft: 100,
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}>
            Thông Tin Khuyến Mãi
          </Text>
        </View>
      </View>

      <View>
        <FlatList data={listPromotions} renderItem={renderItems} />
      </View>
    </View>
  );
};

export default CreateContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.89,
    marginTop: Platform.OS === "ios" ? 30 : 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 150,
    width: "100%",
    backgroundColor: "#D74A80",
  },
});

// import React from "react";
// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Button,
//   Linking,
// } from "react-native";
// import ticketApi from "../api/ticketApi";
// import QRCode from "react-native-qrcode-svg";
// const CreateSettingScreen = () => (
//   <View style={styles.container}>
//     <Text
//       onPress={() => {
//         try {
//           ticketApi
//             .payment(100000)
//             .then((res) => {
//               Linking.openURL(res.zalo.order_url);
//               console.log(res.zalo.order_url);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         } catch (error) {
//           console.log(error);
//         }
//       }}>
//       Setting
//     </Text>

//     <QRCode size={100} value="http://localhost:5005/places/all/getPlace" />
//   </View>
// );

// export default CreateSettingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
