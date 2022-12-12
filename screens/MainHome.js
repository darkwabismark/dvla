import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'

export default function MainHome() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>


 <TouchableOpacity style={styles.btn1}>
<Text style={styles.BtnText}> VIEW LOGS </Text>
</TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    btn1:{
      height: 100,
      width:200,
      backgroundColor:'#00A693'
    },




    BtnText:{
      fontSize:30,
      fontWeight:'bold',
      justifyContent:'center',
      alignItems:'center',
      
    }
})