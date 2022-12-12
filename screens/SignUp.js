import { StyleSheet, Text, View,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
   


<ImageBackground source={require('../assets/green4.jpeg')}  style={styles.regform}>
      <Text style={styles.header}>R E G I S T R A T I O N </Text>

<TextInput style={styles.textinput} placeholder='Enter  Name' underlineColorAndroid={'transparent'} />


<TextInput style={styles.textinput} placeholder='Enter  E-mail' underlineColorAndroid={'transparent'} />

<TextInput style={styles.textinput} placeholder='Enter  PhoneNumber' underlineColorAndroid={'transparent'} />


<TextInput style={styles.textinput} placeholder='Enter Password' secureTextEntry={true} underlineColorAndroid={'transparent'} />


        <TouchableOpacity style={styles.button}>
        <Text style = {styles.btntext}> SIGN UP </Text>

        </TouchableOpacity>



    </ImageBackground>







  )
}

export default SignUp

const styles = StyleSheet.create({




  regform: {
    alignSelf: 'stretch',
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  marginBottom:-120,
  marginTop:-150,

    backgroundColor:'#50C878',
    

},

header:{
    fontSize:24,
    color:'#fff',
    paddingBottom: 10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1,
    fontWeight:'bold',
},
textinput: {
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    color:'#fff',
    borderBottomColor:'#f8f8f8',
    borderBottomWidth:1,
    fontWeight:'bold',
},

button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
    marginTop:30,
    backgroundColor:'#59cbbd'


},

btntext:{

color:'#fff',
fontWeight:'bold',


}



})