import React, { useEffect, useState } from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
  Linking,
  Alert,
} from "react-native";

import "intl";
import "intl/locale-data/jsonp/en";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SetPlaceTo } from "../../store/Actions";
import Contex from "../../store/Context";
import moment from "moment";
import routeApi from "../../api/routeApi";
import ticketApi from "../../api/ticketApi";
import ModalInfoPromotion from "../../components/ModalInfoPromotion";
import ModalNotifi from "../../components/ModalCancelTicket1";
import ModalNotifiStatusPayment from "../../components/ModalCancelTicket1";
export default TicketInfo = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const {
    user,
    listChairs,
    placeTo,
    placeFrom,
    routeVehical,
    busStation,
    ticketUserInfo,
    promotions,
  } = state;

  const [amount, setAmount] = React.useState(
    routeVehical.price * listChairs.length
  );
  const [discountAmount, setDiscountAmount] = React.useState();
  const [showModel, SetShowModel] = React.useState(false);
  const [infoPomotion, setInfoPromotion] = React.useState(null);
  const [showModelNotifi, SetShowModelNotifi] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [showModelNotifiPayment, SetShowModelNotifiPayment] =
    React.useState(false);

  const checkPromotion = () => {
    var discountAmount = 0;
    var total = listChairs.length * routeVehical.price;
    if (promotions) {
      if (promotions?.promotion?.percentDiscount) {
        if (total >= promotions?.promotion?.purchaseAmount) {
          discountAmount =
            (total * promotions?.promotion?.percentDiscount) / 100;
          if (discountAmount < promotions?.promotion.budget) {
            if (discountAmount < promotions?.promotion.maximumDiscount) {
              setAmount(total - discountAmount);
              setDiscountAmount(
                "- " +
                  new Intl.NumberFormat("en-US").format(`${discountAmount}`) +
                  " đ"
              );
              setInfoPromotion({
                id: promotions?.promotion?._id,
                discountAmount,
              });
            } else {
              discountAmount = promotions?.promotion.maximumDiscount;
              setAmount(total - discountAmount);
              setDiscountAmount(
                "- " +
                  new Intl.NumberFormat("en-US").format(`${discountAmount}`) +
                  " đ"
              );
              setInfoPromotion({
                id: promotions?.promotion?._id,
                discountAmount,
              });
            }
          } else {
            setAmount(total);
            setDiscountAmount("KM đã hết ngân sách");
          }
        } else {
          setAmount(total);
          setDiscountAmount("Chưa được áp dụng");
        }
      } else {
        if (total >= promotions?.promotion?.purchaseAmount) {
          if (
            promotions?.promotion?.budget >= promotions.promotion?.moneyReduced
          ) {
            const amountTotal = total - promotions?.promotion?.moneyReduced;
            setAmount(amountTotal);
            setDiscountAmount(
              "- " +
                new Intl.NumberFormat("en-US").format(
                  `${promotions?.promotion?.moneyReduced}`
                ) +
                " d"
            );
            setInfoPromotion({
              id: promotions?.promotion?._id,
              discountAmount: promotions?.promotion?.moneyReduced,
            });
          } else {
            setAmount(total);
            setDiscountAmount("KM đã hết ngân sách");
          }
        } else {
          setAmount(total);
          setDiscountAmount("Chưa được áp dụng");
        }
      }
    } else {
      setAmount(total);
      setDiscountAmount("Chưa được áp dụng");
    }
  };
  React.useEffect(() => {
    // checkPromotion();
    if (promotions) {
      var discount = 0;
      for (const elem of promotions) {
        discount += elem.discountAmount;
      }
      setAmount(routeVehical.price * listChairs.length - discount);
      setDiscountAmount(discount);
    } else {
      setDiscountAmount(0 + " đ");
    }
  }, [routeVehical, listChairs]);
  const handleBooking = async (navigation) => {
    try {
      const customer = {
        lastNameCustomer: ticketUserInfo.fullName,
      };
      const ticket = {
        vehicleRouteId: routeVehical._id,
        customer: customer,
        phoneNumber: ticketUserInfo.phone,
        idPromotion: infoPomotion?.id,
        discountAmount: infoPomotion?.discountAmount,
        locationBus: busStation,
        chair: listChairs,
        quantity: listChairs.length,
        priceId: routeVehical.priceId,
        promotion: promotions,
      };

      ticketApi
        .payment(amount)
        .then((res) => {
          Linking.openURL(res.zalo.order_url);
          console.log(res.zalo.order_url);
          ticketApi
            .getStatusPayment(res.appTransId, res.appTime, ticket)
            .then((result) => {
              console.log("res", result);
              if (result.status) {
                SetShowModelNotifi(!showModelNotifi);
                setTitle("Bạn đã đặt vé thành công");
                setStatus(true);
                SetShowModelNotifiPayment(!showModelNotifiPayment);
                // navigation.navigate("Second");
                depatch(SetPlaceTo(null));
                console.log("ticket ", result.data);
              } else {
                SetShowModelNotifi(!showModelNotifi);
                setTitle("Thanh toán không thành công");
                setStatus(false);
                SetShowModelNotifiPayment(!showModelNotifiPayment);
              }
            });
          SetShowModelNotifiPayment(!showModelNotifiPayment);
          setTitle("Thanh toán không thành công");
        })
        .catch((err) => {
          console.log(err);
        });

      // const ticketSave = await routeApi.bookingTicket(ticket);
      // if (ticketSave) {
      //   navigation.navigate("Second");
      //   depatch(SetPlaceTo(null));
      //   ToastAndroid.showWithGravity(
      //     "Đặt vé thành công",
      //     ToastAndroid.SHORT,
      //     ToastAndroid.BOTTOM
      //   );
      // } else {
      //   console.log("Loi");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ModalInfoPromotion
          showModel={showModel}
          SetShowModel={SetShowModel}
          data={promotions}
        />
        <ModalNotifi
          showModel={showModelNotifi}
          SetShowModel={SetShowModelNotifi}
          status={status}
          title={title}
          navigation={navigation}
        />

        <ModalNotifiStatusPayment
          showModel={showModelNotifiPayment}
          SetShowModel={SetShowModelNotifiPayment}
          status={false}
          title={title}
          navigation={navigation}
        />
        <View style={styles.viewInfo}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Thông tin khách hàng
          </Text>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "gray", marginLeft: 10 }}>
              Họ và Tên
            </Text>
            <Text style={{ fontSize: 15, marginRight: 10 }}>
              {ticketUserInfo.fullName}
            </Text>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "gray", marginLeft: 10 }}>
              Số Điện Thoại
            </Text>
            <Text style={{ fontSize: 15, marginRight: 10, fontWeight: "bold" }}>
              {ticketUserInfo.phone}
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white", padding: 15 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              marginBottom: 10,
            }}>
            Thông Tin Chuyến Đi
          </Text>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Chuyến Đi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginRight: 10 }}>
                {routeVehical.departure.name}
              </Text>
              <Ionicons name="shuffle" size={20} color={"#730E80"} />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                {routeVehical.destination.name}
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
                  color: "black",
                  fontWeight: "bold",
                }}>
                {routeVehical.startTime} -{routeVehical.endTime}
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
                {listChairs.length}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 12 }}>
              Ghế
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FlatList
                data={listChairs}
                renderItem={({ item, index }) => {
                  return (
                    <Text
                      style={{
                        fontSize: 15,
                        marginRight: 10,
                        color: "black",
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
              Điểm lên xe
            </Text>
            <View style={{ flexDirection: "row", width: "60%" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "black",
                }}>
                {`${busStation.address.name}` +
                  " (" +
                  `${busStation.address.detailAddress}` +
                  ", " +
                  `${busStation.address.ward}` +
                  ", " +
                  `${busStation.address.district}` +
                  ", " +
                  `${busStation.address.province}` +
                  " )"}
              </Text>
            </View>
          </View>
          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Tổng Tiền
            </Text>
            <View style={{ flexDirection: "row", width: "60%" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: "black",
                  fontWeight: "bold",
                }}>
                {new Intl.NumberFormat("en-US").format(
                  `${routeVehical.price * listChairs.length}`
                )}{" "}
                đ
              </Text>
            </View>
          </View>

          <View style={styles.viewItemInfo}>
            <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>
              Khuyến Mãi
            </Text>
            <View style={{ flexDirection: "row", width: "60%" }}>
              <TouchableOpacity onPress={() => SetShowModel(!showModel)}>
                <Text
                  style={{
                    fontSize: 15,
                    marginRight: 10,
                    color: "#730E80",
                    fontStyle: "italic",
                  }}>
                  {`Khuyến mãi được áp dụng ${
                    promotions?.length > 0 ? `(${promotions?.length}` + ")" : ""
                  }`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={styles.viewInFoRoute}>
              <View style={styles.viewPrice}>
                <Text style={{ fontSize: 17 }}>Tiền tạm tính: </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, marginRight: 20 }}>
                  {new Intl.NumberFormat("en-US").format(
                    `${routeVehical.price * listChairs.length}`
                  )}{" "}
                  đ
                </Text>
              </View>
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
                  - {new Intl.NumberFormat("en-US").format(`${discountAmount}`)}{" "}
                  đ
                </Text>
              </View>
              <View style={styles.viewPrice}>
                <Text style={{ fontSize: 18 }}>Tổng Tiền Vé: </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginRight: 20,
                    color: "#730E80",
                  }}>
                  {new Intl.NumberFormat("en-US").format(`${amount}`)} đ
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.viewSearch}
              onPress={() => handleBooking(navigation)}>
              <View>
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
                  Xác Nhận
                </Text>
              </View>
            </TouchableOpacity>
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

    justifyContent: "space-between",
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
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    borderColor: "gray",
    backgroundColor: "#F2F2F2",
  },
});
