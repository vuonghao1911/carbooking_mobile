import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import "intl";
import "intl/locale-data/jsonp/en";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SetUser, SetBusStation, SetTicketUserInfo } from "../../store/Actions";
import Contex from "../../store/Context";
import moment from "moment";
import ItemQrCode from "../../components/route/itemQRCode";
import ModalInfoPromotion from "../../components/ModalInfoPromotion";
export default TicketInfo = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { ticket } = state;

  const [discountAmount, setDiscountAmount] = React.useState();
  const [amount, setAmount] = React.useState();
  const [promotionInfo, setPromotionInfo] = React.useState();
  const [showModel, SetShowModel] = React.useState(false);

  React.useEffect(() => {
    // checkPromotion();
    const arrayPromoResult = [];
    if (ticket?.listPromotions?.length > 0) {
      var discount = 0;
      for (const elem of ticket.listPromotions) {
        discount += elem.PromotionResults.discountAmount;
        arrayPromoResult.push({
          idPromotion: elem?.PromotionLine._id,
          discountAmount: elem.PromotionResults.discountAmount,
          promotionTitle: elem.PromotionLine.title,
        });
      }
      setPromotionInfo(arrayPromoResult);
      setAmount(ticket.price * ticket.chair.length - discount);
      setDiscountAmount(discount);
    } else {
      setDiscountAmount(0 + " đ");
    }
  }, [ticket]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ModalInfoPromotion
          showModel={showModel}
          SetShowModel={SetShowModel}
          data={promotionInfo}
        />
        <View style={styles.viewInfo}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#009387" }}>
            Thông tin khách hàng
          </Text>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "gray", marginLeft: 10 }}>
              Họ và Tên
            </Text>
            <Text style={{ fontSize: 15, marginRight: 10 }}>
              {ticket.firstName} {ticket.lastName}
            </Text>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "gray", marginLeft: 10 }}>
              Số Điện Thoại
            </Text>
            <Text style={{ fontSize: 15, marginRight: 10 }}>
              {ticket.phoneNumber}
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white", padding: 15 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#009387",
              marginBottom: 0,
            }}>
            Thông Tin Chuyến Đi
          </Text>
          <View style={styles.viewItemInfo}>
            <FlatList
              data={ticket.chair}
              renderItem={({ item, index }) => {
                return <ItemQrCode item={item} />;
              }}
              horizontal
            />
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Chuyến Đi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginRight: 10 }}>
                {ticket.departure.name}
              </Text>
              <Ionicons name="shuffle" size={20} color={"#009387"} />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                {ticket.destination.name}
              </Text>
            </View>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Thời Gian
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "#009387",
                  fontWeight: "bold",
                }}>
                {moment(new Date(ticket.startDate)).format("DD-MM-yyyy")}
                {" | "}
                {ticket.startTime}
                {" - "}
                {ticket.endTime}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 12 }}>
              Xe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "black",
                  fontWeight: "bold",
                }}>
                {ticket.licensePlates}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 12 }}>
              Số Ghế
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "black",
                }}>
                {ticket.chair.length}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 12 }}>
              Ghế
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FlatList
                data={ticket.chair}
                renderItem={({ item, index }) => {
                  return (
                    <Text
                      style={{
                        fontSize: 15,
                        marginRight: 10,
                        color: "#009387",
                        fontWeight: "bold",
                      }}>
                      {item.seats}
                    </Text>
                  );
                }}
                horizontal
              />
            </View>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 12 }}>
              Điểm Lên Xe
            </Text>
            <View
              style={[
                ticket.locaDeparture.address.name.length > 10
                  ? { flexDirection: "row", width: "60%" }
                  : { flexDirection: "row" },
              ]}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "black",
                }}>
                {`${ticket.locaDeparture.address.name}` +
                  " (" +
                  `${ticket.locaDeparture.address.detailAddress}` +
                  ", " +
                  `${ticket.locaDeparture.address.ward}` +
                  ", " +
                  `${ticket.locaDeparture.address.district}` +
                  ", " +
                  `${ticket.locaDeparture.address.province}` +
                  " )"}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Tổng Tiền
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "#009387",
                  fontWeight: "bold",
                }}>
                {new Intl.NumberFormat("en-US").format(
                  `${ticket.price * ticket.chair.length}`
                )}{" "}
                đ
              </Text>
            </View>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Khuyến Mãi
            </Text>
            <TouchableOpacity
              onPress={() => {
                SetShowModel(!showModel);
              }}>
              <View
                style={[
                  ticket.pomrotionLine?.title?.length > 25
                    ? { flexDirection: "row", width: "60%" }
                    : { flexDirection: "row" },
                ]}>
                <Text
                  style={{
                    fontSize: 15,
                    marginRight: 10,
                    color: "#009387",
                    fontStyle: "italic",
                  }}>
                  {`Khuyến mãi được áp dụng ${
                    ticket?.listPromotions?.length > 0
                      ? `(${ticket?.listPromotions?.length}` + ")"
                      : "(0)"
                  }`}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={styles.viewInFoRoute}>
              <View style={styles.viewPrice}>
                <Text
                  style={{ fontStyle: "italic", color: "gray", fontSize: 16 }}>
                  Khuyến mãi:
                </Text>
                <Text
                  style={{
                    fontStyle: "italic",
                    color: "gray",
                    marginRight: 20,
                    fontSize: 16,
                  }}>
                  {ticket.promotionresults.length == 0 ? (
                    <>0 đ</>
                  ) : (
                    <>
                      -{" "}
                      {new Intl.NumberFormat("en-US").format(
                        `${discountAmount}`
                      )}{" "}
                      d
                    </>
                  )}
                </Text>
              </View>
              <View style={styles.viewPrice}>
                <Text style={{ fontSize: 18 }}>Tổng Tiền Vé: </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginRight: 20,
                    color: "#009387",
                  }}>
                  {ticket.promotionresults.length == 0 ? (
                    <>
                      {" "}
                      {new Intl.NumberFormat("en-US").format(
                        `${ticket.price * ticket.chair.length}`
                      )}{" "}
                      đ
                    </>
                  ) : (
                    <>{new Intl.NumberFormat("en-US").format(`${amount}`)} đ</>
                  )}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    justifyContent: "space-around",
  },

  viewInfo: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
  },
  textSeats: {
    fontSize: 16,
    marginRight: 10,
  },

  viewSearch: {
    backgroundColor: "#D86A23",
    width: "70%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,

    marginTop: 20,
    height: 50,
  },
  viewItemInfo: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  viewPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
  },
  viewInFoRoute: {
    flexDirection: "column",
    height: 90,
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    borderColor: "#009387",
  },
});
