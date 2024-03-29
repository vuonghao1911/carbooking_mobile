import React, { useEffect, useState } from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModalCalendar from "../../components/ModalCalendar";
import ModalDepture from "../../components/ModalDepture";
import ModalDestination from "../../components/ModalDestination";
import ItemRoute from "../../components/route/ItemRoute";
import {
  SetListChairs,
  SetPlaceFrom,
  SetPlaceTo,
  SetRouteVehicle,
} from "../../store/Actions";
import Contex from "../../store/Context";
import routeApi from "../../api/routeApi";

export default SearchRoute = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical, listChairs } = state;
  var [date, setDate] = useState(new Date());
  const [showModel, SetShowModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleDes, setModalVisibleDes] = useState(false);

  const [listRouteVehical, setListRouteVehical] = useState([]);

  const [depture, setDepture] = useState({ name: "Chọn Nơi Đi" });
  const [destination, setDestination] = useState({ name: "Chọn Nơi Đến" });
  const [selectedIdDes, setSelectedIdDes] = useState();
  const [selectedIdDep, setSelectedIdDep] = useState();

  console.log("date1", date);

  const handleRepeat = () => {
    setDepture(destination);
    setDestination(depture);
    setSelectedIdDep(destination._id);
    setSelectedIdDes(depture._id);
    depatch(SetPlaceFrom(destination));
    depatch(SetPlaceTo(depture));
  };

  //   const date = new Date().toLocaleString("en-US", {
  //     timeZone: "Asia/Ho_Chi_Minh",
  //   });
  //   console.log(new Date().toString());

  const handleSearchRoute = async () => {
    try {
      if (date?.dateString) {
        const result = await routeApi.searchRoute(
          depture._id,
          destination._id,
          date.dateString
        );
        if (result) {
          setListRouteVehical(result);
          depatch(SetPlaceFrom(depture));
          depatch(SetPlaceTo(destination));
        } else {
          setListRouteVehical([]);
        }
      } else {
        const date = new Date().toISOString();

        const result = await routeApi.searchRoute(
          depture._id,
          destination._id,
          date
        );
        if (result) {
          setListRouteVehical(result);
          depatch(SetPlaceFrom(depture));
          depatch(SetPlaceTo(destination));
        } else {
          setListRouteVehical([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container]}>
      <ModalDepture
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setDepture={setDepture}
        selectedIdDep={selectedIdDep}
        setSelectedIdDep={setSelectedIdDep}
      />
      <ModalDestination
        setModalVisibleDes={setModalVisibleDes}
        modalVisibleDes={modalVisibleDes}
        setDestination={setDestination}
        selectedIdDes={selectedIdDes}
        setSelectedIdDes={setSelectedIdDes}
      />
      <View>
        <View style={styles.viewPaner}>
          <View style={styles.viewPlace}>
            <View style={styles.viewItemPlace}>
              <Text
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontSize: 14,
                  textAlign: "center",
                }}>
                NƠI ĐI
              </Text>
              <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    textAlign: "center",
                    lineHeight: 50,
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#D86A23",
                  }}>
                  {depture.name}
                </Text>
              </TouchableOpacity>

              <Text
                style={{ color: "black", fontStyle: "italic", fontSize: 14 }}>
                TỈNH/THÀNH PHỐ
              </Text>
            </View>
            <TouchableOpacity onPress={handleRepeat}>
              <Ionicons name="repeat" size={30} color={"#D86A23"} />
            </TouchableOpacity>

            <View style={styles.viewItemPlace}>
              <Text
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontSize: 14,
                  textAlign: "center",
                }}>
                NƠI ĐẾN
              </Text>
              <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => setModalVisibleDes(!modalVisibleDes)}>
                <Text
                  style={{
                    textAlign: "center",
                    lineHeight: 50,
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#D86A23",
                  }}>
                  {destination.name}
                </Text>
              </TouchableOpacity>
              <Text
                style={{ color: "black", fontStyle: "italic", fontSize: 14 }}>
                TỈNH/THÀNH PHỐ
              </Text>
            </View>
          </View>

          <View style={styles.viewItemDate}>
            <Text
              style={{
                color: "black",
                fontStyle: "italic",
                fontSize: 14,
                textAlign: "center",
                marginTop: 10,
              }}>
              Chọn Ngày Đi
            </Text>
            <TouchableOpacity
              style={{ height: 50 }}
              onPress={() => {
                SetShowModel(!showModel);
              }}>
              <Text
                style={{
                  textAlign: "center",
                  lineHeight: 50,
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "#D86A23",
                }}>
                {moment(date.dateString).format("DD/MM")}
              </Text>
            </TouchableOpacity>
            <ModalCalendar
              showModel={showModel}
              setText={setDate}
              SetShowModel={SetShowModel}
              date={date}
            />
          </View>
        </View>

        <View style={styles.viewSearch}>
          <Ionicons name="search-outline" size={25} color={"#9506D8"} />
          <TouchableOpacity
            // onPress={() => navigation.navigate("InStart")}
            onPress={handleSearchRoute}>
            <Text
              style={{
                fontSize: 18,
                color: "#9506D8",
                fontWeight: "bold",
                marginRight: 30,
              }}>
              TÌM CHUYẾN XE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          marginLeft: 20,
          marginBottom: 10,
        }}>
        Danh Sách Chuyến Xe
      </Text>
      <View style={styles.viewBody}>
        <FlatList
          data={listRouteVehical}
          renderItem={({ item }) => (
            <ItemRoute item={item} navigation={navigation} />
          )}
          // keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
    backgroundColor: "white",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },

  viewSearch: {
    width: "60%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    marginLeft: 80,
    marginBottom: 40,
    marginTop: 30,
    height: 50,
    borderWidth: 1,
    borderColor: "#9506D8",
  },
  viewPaner: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    marginLeft: 20,
    marginBottom: 30,
    height: 200,
    borderWidth: 1,
    borderColor: "#D86A23",
    shadowColor: "#9506D8",
    shadowRadius: 10,
    elevation: 25,
    borderRadius: 10,
  },
  viewBody: {
    height: 300,
    alignItems: "center",
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,

    alignItems: "center",
  },
  viewItemPlace: {
    flexDirection: "column",
    marginBottom: 5,
  },
  viewItemDate: {
    flexDirection: "column",
    marginBottom: 5,
    // borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    width: "50%",

    marginTop: 10,
    marginLeft: 80,
  },
});
