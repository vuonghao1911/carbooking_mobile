import React from "react";
import { ImageBackground, StyleSheet, Text,TextInput, View, Button } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const CreateScreen = ({ navigation }) => (
  <View style={styles.container}>
    
    <ImageBackground source={require('../img/hinh1.png')} resizeMode="cover" style={styles.image}>
      <Text style={{marginBottom:50,marginTop:120,textAlign:'center',
      fontSize:50,fontWeight:"bold",color:"#0688FE"}}>Zalo</Text>
      <View style={styles.box}>
        <View>
          <Text style={styles.login}>Dang nhap</Text>
        </View>
        <View>
          <Text style={styles.name_label}>User name:</Text>
          <TextInput placeholder="User name" style={styles.input}></TextInput>
        </View>
        <View>
          <Text style={styles.name_label}>Password:</Text>
          <TextInput placeholder="Password" style={styles.input}></TextInput>
        </View>
       <View style={styles.styleLoginBtn}>
       <Button
            color="#0688FE" //button color
            onPress={()=>{navigation.navigate('Second',{name:'jane'})}}
            title="Login"
          />
       </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  image: {
   height: "100%",
  textAlign:"center",
   
   paddingLeft:30,
   paddingRight:30,

  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  box:{
    padding:20,
    backgroundColor:"#ffffff",
    width: "auto",
    height:"auto",
    borderRadius:10,
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 20,
  },
  login:{
    fontSize:25,
    fontStyle:"normal",
    fontWeight:"500",
    textAlign:"center",

  },
  input:{
    border:"none",
    borderRadius:7,
    paddingLeft:10,
    height:50,
    backgroundColor:"#dcdee3",
    color:"black",
    fontWeight:"500",
    fontSize:15,
  },
  name_label:{
    marginTop:20,
    marginBottom:5,
    fontSize:12,
    fontWeight:"00"
  },
  styleLoginBtn: {
    width:300,
    marginTop: 30,
    marginLeft: 0,
    marginRight: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#0688FE", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },

});
export default CreateScreen;