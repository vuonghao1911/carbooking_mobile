import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import "intl";
import "intl/locale-data/jsonp/en";
import Ionicons from "react-native-vector-icons/Ionicons";

import { SetListChairs, SetPromotions } from "../../store/Actions";
import Contex from "../../store/Context";
import { listChair, listChairLiMo } from "../../data/dataTest";
import ItemChair from "../../components/route/ItemChair";
import ItemChairLiMo from "../../components/route/itemChairLiMo";
import ItemChairLiMoSe from "../../components/route/itemChairLiMoSecond";
import ModalTitlePromotion from "../../components/ModalTitlePromotion";

export default SelectChair = ({ navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical, listChairs, promotions, click, click2 } = state;
  const [price, setPrice] = React.useState();
  const [titlePromo, setTitlePromo] = React.useState(
    "Chưa có khuyến mãi được áp dụng"
  );
  const [infoPomotion, setInfoPromotion] = React.useState(null);
  const [showModel, SetShowModel] = React.useState(false);
  const [listFirstFloor, setlistFirstFloor] = React.useState();
  const [listSecondFloor, setlistSecondFloor] = React.useState();

  const [disable, setDisable] = React.useState(false);

  const [typing, setTyping] = useState("Floor1");

  React.useEffect(() => {
    depatch(SetListChairs([]));

    if (routeVehical.chair.length > 29) {
      setlistFirstFloor(
        routeVehical.chair.slice(0, routeVehical.chair.length / 2)
      );
      setlistSecondFloor(
        routeVehical.chair.slice(
          routeVehical.chair.length / 2,
          routeVehical.chair.length
        )
      );
    }
  }, [routeVehical]);
  const checkPromotion = () => {
    const arrayPromotion = [];
    var discountAmount = 0;
    var total = listChairs.length * routeVehical.price;
    if (routeVehical.promotion.length > 0) {
      for (const elem of routeVehical.promotion) {
        if (elem?.promotionDetail?.percentDiscount) {
          if (total >= elem?.promotionDetail?.purchaseAmount) {
            discountAmount =
              (total * elem?.promotionDetail?.percentDiscount) / 100;
            if (discountAmount < elem?.promotionDetail?.remainingBudget) {
              if (discountAmount < elem?.promotionDetail?.maximumDiscount) {
                arrayPromotion.push({ promotions: elem, discountAmount });
              } else {
                discountAmount = elem?.promotionDetail?.maximumDiscount;

                arrayPromotion.push({ promotions: elem, discountAmount });
              }
            } else {
            }
          } else {
          }
        } else {
          if (total >= elem?.promotionDetail?.purchaseAmount) {
            if (
              elem?.promotionDetail?.remainingBudget >=
              elem?.promotionDetail?.moneyReduced
            ) {
              arrayPromotion.push({
                promotions: elem,
                discountAmount: elem?.promotionDetail?.moneyReduced,
              });
            }
          }
        }
      }
    }

    const arrayPromoResult = [];
    if (arrayPromotion.length > 0) {
      for (const elem of arrayPromotion) {
        arrayPromoResult.push({
          idPromotion: elem?.promotions.promotionLine._id,
          discountAmount: elem.discountAmount,
          promotionTitle: elem.promotions.promotionLine.title,
        });
      }
      setInfoPromotion(arrayPromoResult);
    } else {
      setInfoPromotion(null);
    }
  };
  console.log("promo", infoPomotion);
  React.useEffect(() => {
    checkPromotion();

    if (listChairs.length == 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    console.log("clicked", click);

    // return () => checkPromotion();
  }, [listChairs, click, typing, price, click2]);
  React.useEffect(() => {
    checkPromotion();

    console.log("clicked2", click);

    // return () => checkPromotion();
  }, [click2]);

  return (
    <View style={styles.container}>
      <View
        style={
          {
            // backgroundColor: "black",
            // height: 300,
          }
        }>
        <View style={styles.viewInFo}>
          <ModalTitlePromotion
            showModel={showModel}
            SetShowModel={SetShowModel}
            data={infoPomotion}
          />
          <View
            style={{
              flexDirection: "column",
              //alignContent: "center",
              alignItems: "center",
              marginLeft: 20,
            }}>
            <Text style={{ fontSize: 25, color: "black" }}>
              {routeVehical.departure.name} - {routeVehical.destination.name}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: 15,
                color: "#D86A23",
              }}>
              {routeVehical.startTime} -{routeVehical.endTime}
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#003104",
          marginLeft: 20,
        }}>
        {`Chọn ghế (` + `${listChairs.length}` + `/5)`}
      </Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}>
        <View style={styles.viewBody}>
          {routeVehical.carType == "Xe Thường" ? (
            <FlatList
              data={routeVehical.chair}
              numColumns={4}
              columnWrapperStyle={styles.row}
              renderItem={({ item }) => (
                <ItemChair
                  item={item}
                  navigation={navigation}
                  setPrice={setPrice}
                />
              )}
            />
          ) : (
            <View style={{ marginLeft: 10 }}>
              <View style={styles.viewFloor}>
                <TouchableOpacity
                  onPress={() => {
                    setTyping("Floor1");
                  }}>
                  {typing === "Floor1" ? (
                    <Text style={styles.text2}>TẦNG 1</Text>
                  ) : (
                    <Text style={styles.text1}>TẦNG 1</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setTyping("Floor2");
                  }}>
                  {typing === "Floor2" ? (
                    <Text style={styles.text2}>TÂNG 2</Text>
                  ) : (
                    <Text style={styles.text1}>TẦNG 2</Text>
                  )}
                </TouchableOpacity>
              </View>

              {typing === "Floor1" ? (
                <FlatList
                  data={listFirstFloor}
                  numColumns={3}
                  columnWrapperStyle={styles.row}
                  renderItem={({ item }) => (
                    <ItemChairLiMo
                      item={item}
                      navigation={navigation}
                      setPrice={setPrice}
                    />
                  )}
                />
              ) : (
                <FlatList
                  data={listSecondFloor}
                  numColumns={3}
                  columnWrapperStyle={styles.row}
                  renderItem={({ item }) => (
                    <ItemChairLiMoSe
                      item={item}
                      navigation={navigation}
                      setPrice={setPrice}
                    />
                  )}
                />
              )}
            </View>
          )}
        </View>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <View style={styles.viewInFoRoute}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}>
            <Ionicons
              style={{ marginLeft: 15 }}
              name="square"
              size={18}
              color={"#DEF3FF"}
            />
            <Text style={styles.styteTextChair}>Còn trống</Text>
            <Ionicons
              style={{ marginLeft: 20 }}
              name="square"
              size={18}
              color={"orange"}
            />
            <Text style={styles.styteTextChair}>Đang chọn</Text>
            <Ionicons
              style={{ marginLeft: 20 }}
              name="square"
              size={18}
              color={"#D5D9DD"}
            />
            <Text style={styles.styteTextChair}>Đã đặt</Text>
          </View>
          <View style={styles.viewPrice}>
            <Text style={{ fontSize: 17 }}>Tiền tạm tính: </Text>
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 5 }}>
              {new Intl.NumberFormat("en-US").format(
                `${routeVehical.price * listChairs.length}`
              )}{" "}
              đ
            </Text>
          </View>
          <TouchableOpacity onPress={() => SetShowModel(!showModel)}>
            <View style={styles.viewPrice}>
              <Text style={{ fontStyle: "italic", color: "gray" }}>
                {`*Khuyến mãi: ${
                  infoPomotion?.length > 0
                    ? `(${infoPomotion?.length}` + ")"
                    : ""
                }`}
              </Text>

              <Text
                style={{ fontStyle: "italic", color: "gray", marginLeft: 5 }}>
                {infoPomotion ? infoPomotion[0]?.promotionTitle : titlePromo}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            disable
              ? {
                  backgroundColor: "gray",
                  width: "70%",

                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  borderRadius: 20,

                  marginTop: 30,
                  height: 50,
                }
              : styles.viewSearch,
          ]}
          disabled={disable}
          onPress={() => {
            depatch(SetPromotions(infoPomotion));
            navigation.navigate("routeDetails");
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
              }}>
              Tiếp Theo
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  viewInFo: {
    margin: 10,
    //  flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
  },

  viewSearch: {
    backgroundColor: "#D86A23",
    width: "70%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,

    marginTop: 30,
    height: 50,
  },

  viewBody: {
    height: 350,
    width: "85%",

    marginTop: 20,
  },
  viewInFoRoute: {
    flexDirection: "column",
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
  },
  styteTextChair: {
    fontStyle: "italic",
    color: "gray",
    marginLeft: 5,
  },
  viewPrice: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    width: "70%",
  },
  row: {},
  viewFloor: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: -20,
  },
  text1: {
    fontSize: 16,
  },

  text2: {
    fontSize: 16,
    color: "#D86A23",
  },
});
