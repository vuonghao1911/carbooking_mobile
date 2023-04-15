import React, { useState } from "react";
import { StyleSheet, DatePickerAndroid } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import DatePicker from "react-native-date-picker";

import moment from "moment";
import { LocaleConfig } from "react-native-calendars";
import Modal from "react-native-modal";

import Contex from "../store/Context";
const ModalCalendar = ({ showModel, setText, SetShowModel, date }) => {
  const { state, depatch } = React.useContext(Contex);
  const { user, userSearched, idConversation, userChatting } = state;

  LocaleConfig.locales["vn"] = {
    monthNames: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    monthNamesShort: [
      "Th1",
      "Th2",
      "Th3",
      "Th4",
      "Th5",
      "Th6",
      "Th7",
      "Th8",
      "Th9",
      "Th10",
      "Th11",
      "Th12",
    ],
    dayNames: [
      "Thứ 2",
      "Thứ 3",
      "Thứ 4",
      "Thứ 5",
      "Thứ 6",
      "Thứ 7",
      "Chủ Nhật",
    ],
    dayNamesShort: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    today: "hom nay",
  };
  LocaleConfig.defaultLocale = "vn";
  return (
    <Modal
      isVisible={showModel}
      style={{ marginBottom: 100, borderRadius: 50 }}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      onBackdropPress={() => SetShowModel(!showModel)}>
      {/* <Calendar
        initialDate={date.dateString.toString()}
        style={{ marginTop: 0, borderRadius: 10 }}
        onDayPress={(day) => {
          console.log("selected day", day);
          setText(day);
          SetShowModel(!showModel);
        }}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
      /> */}

      {/* <DateTimePicker
        display={"default"}
        timeZoneOffsetInMinutes={0}
        value={new Date(date)}
        mode="date"
        minimumDate={new Date(1920, 10, 20)}
        maximumDate={new Date()}
      /> */}
      <DatePicker date={new Date()} onDateChange={setText} />
    </Modal>
  );
};

export default ModalCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  viewtop: {
    marginTop: 30,
    display: "flex",
    // backgroundColor: "#0688FE",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },

  passwordContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    width: 200,
    borderColor: "#0688FE",
    paddingBottom: 5,
  },
  inputStyle: {
    flex: 1,
  },
});
