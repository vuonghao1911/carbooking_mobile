import React, { useEffect, useState } from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { SetUser } from "../store/Actions";
import Contex from "../store/Context";
import userApi from "../api/userApi";
import ModalProvince from "../components/ModalProvince";
import listProvince from "../local.json";
import ModalCalendarBoD from "../components/ModalCalendarDoB";
import moment from "moment";
export default UpdateProfile = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, listChairs, placeTo, placeFrom, routeVehical } = state;

  const [lastName, setLastName] = React.useState(user?.lastName);
  const [firstName, setFirstName] = React.useState(user?.firstName);
  const [email, setEmail] = React.useState(user?.email ? user.email : "");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleDis, setModalVisibleDis] = useState(false);
  const [modalVisibleWard, setModalVisibleWard] = useState(false);

  const [province, setProvince] = useState({
    name: user?.address?.province ? user?.address?.province : null,
  });
  const [selectedIdProvince, setSelectedIdProvince] = useState();

  const [district, setDistrict] = useState({
    name: user?.address?.district ? user?.address?.district : null,
  });
  const [selectedIdDistrict, setSelectedIdDistrict] = useState();

  const [ward, setWard] = useState({
    name: user?.address?.ward ? user?.address?.ward : null,
  });
  const [selectedIdWard, setSelectedIdWard] = useState();

  const [dob, setDob] = useState({
    timestamp: user?.dateOfBirth ? new Date(user.dateOfBirth) : "",
  });
  const [showModelBoD, SetShowModelBoD] = useState(false);

  const UpdateProfile = async () => {
    try {
      if (lastName.length === 0) {
        ToastAndroid.showWithGravity(
          "Họ không được rỗng",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        return;
      } else if (firstName.length === 0) {
        ToastAndroid.showWithGravity(
          "Tên không được rỗng",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        return;
      }
      const customer = {
        id: user._id,
        firstName: firstName,
        lastName: lastName,
        address: {
          ward: ward.name,
          district: district.name,

          province: province.name,
        },
        dateOfBirth: dob.timestamp,
        email: email,
      };
      console.log("custer", customer);
      const customerUpdate = await userApi.changeInfo(customer);
      if (customerUpdate) {
        console.log("success");
        depatch(SetUser(customerUpdate));
        ToastAndroid.showWithGravity(
          "Cập nhật thành công",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        //navigation.navigate("Second");
      } else {
        console.log("register failed");
      }

      console.log(customerUpdate);
    } catch (error) {
      console.log("error", error);
    }
  };

  const setModal = () => {
    SetShowModelBoD(!showModelBoD);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <ModalProvince
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            setProvince={setProvince}
            selectedIdProvince={selectedIdProvince}
            setSelectedIdProvince={setSelectedIdProvince}
            listData={listProvince}
          />

          <View
            style={{ backgroundColor: "white", padding: 15, marginBottom: 10 }}>
            <ModalProvince
              setModalVisible={setModalVisibleDis}
              modalVisible={modalVisibleDis}
              setProvince={setDistrict}
              selectedIdProvince={selectedIdDistrict}
              setSelectedIdProvince={setSelectedIdDistrict}
              listData={province.districts}
            />
            <ModalProvince
              setModalVisible={setModalVisibleWard}
              modalVisible={modalVisibleWard}
              setProvince={setWard}
              selectedIdProvince={selectedIdWard}
              setSelectedIdProvince={setSelectedIdWard}
              listData={district.wards}
            />

            {/* <ModalCalendarBoD
              showModel={showModelBoD}
              setText={setDob}
              SetShowModel={SetShowModelBoD}
              date={dob}
            /> */}
            <Text
              style={{
                fontSize: 20,
                fontStyle: "italic",
                color: "gray",
                marginBottom: 10,
                fontWeight: "bold",
              }}>
              Cập Nhật Thông Tin
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}>
              <View
                style={{
                  flexDirection: "column",
                  width: "30%",
                  marginBottom: 30,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "gray",

                    marginLeft: 15,
                  }}>
                  Họ
                </Text>
                <TextInput
                  style={styles.input}
                  value={firstName}
                  onChangeText={(text) => {
                    setFirstName(text);
                  }}></TextInput>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  marginBottom: 30,
                  width: "60%",
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "gray",

                    marginLeft: 15,
                  }}>
                  Tên
                </Text>
                <TextInput
                  style={styles.input}
                  value={lastName}
                  onChangeText={(text) => {
                    setLastName(text);
                  }}></TextInput>
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 30 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Email
              </Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}></TextInput>
            </View>

            <View
              style={{
                flexDirection: "column",
                marginTop: 0,
                borderBottomWidth: 1,
                padding: 5,
                borderBottomColor: "#D86A23",
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Tỉnh / Thành Phố
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    width: "100%",
                  }}>
                  <Text style={{ textAlign: "center", fontSize: 15 }}>
                    {province.name
                      ? province.name
                      : "------ Tỉnh / Thành Phố --------"}
                  </Text>

                  <View
                    style={{
                      width: 20,

                      alignItems: "center",
                      marginLeft: 10,
                    }}>
                    <Ionicons
                      name="caret-down-outline"
                      size={20}
                      color={"gray"}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                borderBottomWidth: 1,
                padding: 5,
                borderBottomColor: "#D86A23",
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Quận / Huyện
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisibleDis(!modalVisibleDis)}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    width: "100%",
                  }}>
                  <Text style={{ textAlign: "center", fontSize: 15 }}>
                    {district.name
                      ? district.name
                      : "------ Quận / Huyện --------"}
                  </Text>

                  <View
                    style={{
                      width: 20,

                      alignItems: "center",
                      marginLeft: 10,
                    }}>
                    <Ionicons
                      name="caret-down-outline"
                      size={20}
                      color={"gray"}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                borderBottomWidth: 1,
                padding: 5,
                borderBottomColor: "#D86A23",
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Phường / Xã
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisibleWard(!modalVisibleWard)}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    width: "100%",
                  }}>
                  <Text style={{ textAlign: "center", fontSize: 15 }}>
                    {ward.name ? ward.name : "------ Phường / Xã --------"}
                  </Text>

                  <View
                    style={{
                      width: 20,

                      alignItems: "center",
                      marginLeft: 10,
                    }}>
                    <Ionicons
                      name="caret-down-outline"
                      size={20}
                      color={"gray"}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                borderBottomWidth: 1,
                padding: 5,
                borderBottomColor: "#D86A23",
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "gray",

                  marginLeft: 15,
                }}>
                Ngày sinh
              </Text>
              <TouchableOpacity
                onPress={() => {
                  SetShowModelBoD(!showModelBoD);
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    width: "100%",
                  }}>
                  <Text style={{ textAlign: "center", fontSize: 15 }}>
                    {dob.timestamp != ""
                      ? moment(dob.timestamp).format("DD/MM/YYYY")
                      : ""}
                  </Text>
                  {showModelBoD && (
                    <DateTimePicker
                      mode={"date"}
                      value={
                        dob.timestamp != ""
                          ? new Date(dob.timestamp)
                          : new Date()
                      }
                      display="default"
                      onChange={(day) => {
                        SetShowModelBoD(!showModelBoD);

                        setDob({
                          timestamp: day.nativeEvent.timestamp,
                        });
                      }}
                      positiveButtonLabel="Chọn"
                      negativeButton={{ label: "Hủy", textColor: "red" }}
                    />
                  )}

                  <View
                    style={{
                      width: 20,

                      alignItems: "center",
                      marginLeft: 10,
                    }}>
                    <Ionicons name="calendar" size={20} color={"gray"} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={[
                styles.viewSearch,
                { borderWidth: 1, borderColor: "#694fad" },
              ]}
              onPress={
                // depatch(SetBusStation(busLocation));
                // depatch(SetTicketUserInfo({ fullName, phone }));
                UpdateProfile
                //  navigation.navigate("ticketInfo");
              }>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#694fad",
                    fontWeight: "bold",
                  }}>
                  Cập Nhật
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* 
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.viewSearch, { backgroundColor: "#694fad" }]}
              onPress={() => {
                depatch(SetBusStation(busLocation));
                depatch(SetTicketUserInfo({ fullName, phone }));
                //  navigation.navigate("ticketInfo");
              }}>
              <View>
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
                  Đăng Xuất
                </Text>
              </View>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "flex-start",
    marginTop: -70,
  },
  viewPrice: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "orange",
    width: "50%",
    height: 30,
  },
  viewPlace: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
  },
  textSeats: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    border: "none",
    borderRadius: 7,
    paddingLeft: 10,
    height: 30,
    // backgroundColor: "#dcdee3",
    color: "black",

    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D86A23",
  },
  viewInfo: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 180,
    marginBottom: 20,
  },
  viewSearch: {
    width: "80%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,

    //  / marginTop: 10,
    height: 50,
  },
});
