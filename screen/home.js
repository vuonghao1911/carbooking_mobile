import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { StackActions } from "@react-navigation/native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./chat";
import ContactsSreen from "./contacts";
import AboutScreen from "./about";
import SettingScreen from "./settings";
import Introduce from "./introduce";

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function SecondScreen({ navigation, route }) {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   //tabBarShowLabel: false,
      //   tabBarStyle: {
      //    //backgroundColor: 'red',
      //    style: {backgroundColor: 'blue'

      //   }},
      //   style: {backgroundColor: 'green'},

      //   tabBarOptions:{
      //     style: {
      //       backgroundColor: 'red'
      //     },
      //   },
      //   activeTintColor: '#e91e63',

      // }}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Chats') {
      //       iconName = focused
      //         ? 'chatbubbles'
      //         : 'chatbubbles-outline';
      //     } else if (route.name === 'Contacts') {
      //       iconName = focused ? 'people-circle':"people-circle-outline";

      //     }else if (route.name === 'Me') {
      //       iconName = focused ? 'person':"person-outline" ;
      //     }
      //     else if (route.name === 'Settings') {
      //       iconName = focused ? 'list':"list-outline" ;
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      // })}

      initialRouteName="Feed"
      activeColor="white">
      <Tab.Screen
        name="Chats"
        component={Introduce}
        // options={{headerShown: false,
        //tapBarColor: 'bule',
        // }}
        //name="Feed"
        // component={Feed}
        options={{
          tabBarLabel: "Nhà",
          tabBarColor: "#D86A23",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsSreen}
        options={{
          tabBarLabel: "Lich Sử",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Ionicons name="timer" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={AboutScreen}
        //  options={{headerShown: false, }}
        options={{
          tabBarLabel: "Hồ sơ",
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Khuyến Mãi"
        component={SettingScreen}
        //  options={{headerShown: false, }}
        options={{
          tabBarLabel: "Khuyen Mai",
          tabBarColor: "#D74A80",
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
