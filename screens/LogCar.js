import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LogCar() {
  return (
    <View style={styles.container}>
      

<View  style={styles.InputText}>
<TextInput style={styles.textinput} placeholder='Reason For Journey' underlineColorAndroid={'transparent'} />


<TextInput style={styles.textinput} placeholder='Time of Leaving Garage' underlineColorAndroid={'transparent'} />

<TextInput style={styles.textinput} placeholder='TIme of return ' underlineColorAndroid={'transparent'} />

<TextInput style={styles.textinput} placeholder='Route Taken ' underlineColorAndroid={'transparent'} />

<TextInput style={styles.textinput} placeholder='Description of Vehicle' secureTextEntry={true} underlineColorAndroid={'transparent'} />


<TextInput style={styles.textinput} placeholder='Dv Number ' underlineColorAndroid={'transparent'} />

<TextInput style={styles.textinput} placeholder='Driver Name ' underlineColorAndroid={'transparent'} />


</View>


<TouchableOpacity style={styles.btn}>
<Text style={styles.btnText}> LOG A JOURNEY </Text>
</TouchableOpacity>





    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:100,
    backgroundColor:'#9DC183,'
  }, 
  textinput:{
    backgroundColor:'white',
paddingHorizontal: 15,
paddingVertical:10,
borderRadius: 10,
marginTop:6,
  },


  btnText:{
     color:'white',
  fontWeight: '700',
  fontSize: 20,

  }, 

btn:{
   backgroundColor:'#4F7942',
  width:'100%',
  padding:15,
  borderRadius:80,
 alignItems:'center',
}


})