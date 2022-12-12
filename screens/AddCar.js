import { StyleSheet, Text, View,TextInput, ImageBackground,TouchableOpacity,Button } from 'react-native'
import React from 'react'

export default function AddCar() {
  return (
    


 <ImageBackground source={require('../assets/white.jpeg')}  style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Enter Manufacturer'
          placeholderTextColor='white'
          
        />
        <TextInput
          style={styles.input}
          placeholder='Enter  Model'
          secureTextEntry={true}
          placeholderTextColor='white'
      
        />
        <TextInput
          style={styles.input}
          placeholder='Enter Year Model'
          placeholderTextColor='white'
          
        />
        <TextInput
          style={styles.input}
          placeholder='Enter Chassis Number'
          placeholderTextColor='white'
          
        />

<TextInput
          style={styles.input}
          placeholder='Enter  Color '
          placeholderTextColor='white'
/>

        <TouchableOpacity style={styles.Btn}>
        <Text style={styles.btnTxt}> ADD CAR </Text>

        </TouchableOpacity>

      </ImageBackground>

    
    )
  }


const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#317873',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  Btn:{
    backgroundColor:'#50C878',
    width:50,
    marginTop:70,
    backgroundColor:'#043927',
  width:'100%',
  padding:15,
  borderRadius:25,
  borderWidth:2,
  borderColor:'white',
   alignItems:'center',
  
  },

  btnTxt:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
  }
})

