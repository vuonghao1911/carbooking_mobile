import React from "react";
import { ImageBackground, StyleSheet, Text,TextInput, View, Button } from "react-native";
const CreateAboutScreen = ()=>(
    <View style={styles.container}>
        <Text>About me</Text>
    </View>
);

export default  CreateAboutScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
