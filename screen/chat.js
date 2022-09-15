import React from "react";
import { ImageBackground, StyleSheet, Text,TextInput, View, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
const CreateHomeScreen = ({ navigation})=>(
    <View style={styles.container}>
        <View style={styles.viewtop}>
            <View style={{backgroundColor:'#4183F2',borderRadius:30,height:55,width:60,marginRight:25}}>
                <Text style={{fontSize:24,lineHeight:55,marginLeft:8,color:'white',fontWeight:'bold'}}>Zalo</Text>
            </View>
            <View style={styles.passwordContainer}>
            <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry
                placeholder="Search..."
             
              
                />
            <Ionicons name="search" size={25} color='#0688FE'/>
</View>
            <Text 
            onPress={()=>{navigation.navigate('ScanQR',{name:'jane'})}}
            >fsdfsdf</Text>

        </View>
       
    </View>
);

export default  CreateHomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    viewtop:{
        marginTop: 30,
        display: "flex",
       // backgroundColor: "#0688FE",
        justifyContent:'space-evenly',
        flexDirection:'row',
        alignItems:'center',
    },
   
    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        width:200,
        borderColor: '#0688FE',
        paddingBottom: 5,
      },
      inputStyle: {
        flex: 1,
      },
})