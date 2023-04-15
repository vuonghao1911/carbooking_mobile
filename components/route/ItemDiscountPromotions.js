import React, { useEffect, useState } from "react";

import { View, FlatList, StyleSheet, Text, Image } from "react-native";

import Contex from "../../store/Context";

import moment from "moment";

export default Items = ({ item, navigation }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, routeVehical } = state;

  return (
    <View style={styles.Item}>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Text style={{ fontSize: 17, color: "#CF0D55", fontWeight: "bold" }}>
          {item.promotionLine.title}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
            width: "90%",
          }}>
          <View>
            <View style={styles.viewRowItem}>
              <Text
                style={{ fontSize: 14, color: "#22A2AD", fontWeight: "bold" }}>
                Giảm Tối Đa:{" "}
              </Text>
              <Text style={{ fontSize: 14, color: "black" }}>
                {new Intl.NumberFormat("en-US").format(
                  `${item.maximumDiscount}`
                )}{" "}
                đ
              </Text>
            </View>

            <View style={styles.viewRowItem}>
              <Text
                style={{ fontSize: 14, color: "#22A2AD", fontWeight: "bold" }}>
                Khuyến Mãi Giảm:{" "}
              </Text>
              <Text style={{ fontSize: 14, color: "black" }}>
                {item.percentDiscount} %
              </Text>
            </View>
            <View style={styles.viewRowItem}>
              <Text
                style={{ fontSize: 14, color: "#22A2AD", fontWeight: "bold" }}>
                Ngày Áp Dụng:{" "}
              </Text>
              <Text style={{ fontSize: 14, color: "black" }}>
                {moment(new Date(item.promotionLine.startDate)).format(
                  "DD/MM/yyyy"
                )}
              </Text>
            </View>
          </View>
          <Image
            style={{ width: 80, height: 80, borderRadius: 10 }}
            source={{
              uri: `${item.promotionLHeader.imgUrl}`,
            }}
          />
        </View>

        <View style={styles.viewRowItem}>
          <Text style={{ fontSize: 14, color: "#22A2AD", fontWeight: "bold" }}>
            Ngày Hết Hạn:{" "}
          </Text>
          <Text style={{ fontSize: 14, color: "black" }}>
            {moment(new Date(item.promotionLine.endDate)).format("DD/MM/yyyy")}
          </Text>
        </View>
        <View style={styles.viewRowItem}>
          <Text style={{ fontSize: 14, color: "#22A2AD", fontWeight: "bold" }}>
            Tuyến:{" "}
          </Text>
          <Text style={{ fontSize: 14, color: "black" }}>
            {item.routeType ? item.routeType?.type : "Tất cả tuyến đường"}
          </Text>
        </View>
        <View style={styles.viewRowItem}>
          {item.promotionLine.status ? (
            <>
              <Text
                style={{ fontSize: 14, color: "#22A2AD", fontWeight: "bold" }}>
                Trạng Thái:{" "}
              </Text>
              <Text
                style={{ fontSize: 14, color: "black", fontStyle: "italic" }}>
                Đang áp Dụng
              </Text>
            </>
          ) : (
            <>
              <Text
                style={{ fontSize: 14, color: "#22A2AD", fontWeight: "bold" }}>
                Trạng Thái:{" "}
              </Text>
              <Text
                style={{ fontSize: 14, color: "black", fontStyle: "italic" }}>
                Chưa áp dụng
              </Text>
            </>
          )}
        </View>
        {item.budget > 0 ? (
          <></>
        ) : (
          <View style={styles.viewRowItem}>
            <Text
              style={{ fontSize: 14, color: "#22A2AD", fontWeight: "bold" }}>
              Ngân Sách:{" "}
            </Text>
            <Text style={{ fontSize: 14, color: "black" }}>Hết ngân sách</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 30 : 25,
    flexDirection: "column",
    backgroundColor: "#E3FAF4",
  },

  Item: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 350,

    backgroundColor: "#ECEFF1",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: 0,
    borderWidth: 0,

    borderRadius: 15,
    margin: 10,
    paddingLeft: 15,
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
  },
  viewRowItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
});
