import { StyleSheet, Text, View ,KeyboardAvoidingView,TextInput, TouchableOpacity,ImageBackground,Dimensions,Image} from 'react-native';
import React, { useState } from 'react';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {auth, db} from '../firebase';

// run the app now and see 

export default function LoginScreen ({navigation}) {  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const  Loginhandle = () => {

auth.signInWithEmailAndPassword(email, password)
    .then((response) => {
        const uid = response.user.uid
        // the firebase is now connected. it signs the user in alright but i see that you are fetching the user's
        // details from firestore which is not there yet in this case.
        // const usersRef = db.collection('users')
        // usersRef
        //     .doc(uid)
        //     .get()
        //     .then(firestoreDocument => {
        //         if (!firestoreDocument.exists) {
        //             alert("User does not exist anymore.")
        //             return;
        //         }
        //         const user = firestoreDocument.data()
        //         
        //         

        //     })
        //     .catch(error => {
        //         alert(error)
        //     });
        navigation.navigate('dashboard')
    })
    .catch(error => {
        alert(error)
    })
                          
   
  }
    
  return (



<ImageBackground source={require('../assets/green4.jpeg')}  style={styles.container} >


<View style={styles.Top}>

<Text style={styles.HeaderText}>  D V     L O G     S Y S T E M </Text>

<Image source={require('../assets/come.png')}  style={styles.Imagehead}  />
</View>


  <View style={styles.inputcontainer}> 
    

<TextInput 
placeholder="E-mail"
style={styles.input}
onChangeText={(text) => setEmail(text)}
  value={email}
/>



<TextInput 
placeholder="Password"
style={styles.input}
secureTextEntry
value={password}
onChangeText={(text) => setPassword(text)}

/>


</View>


<View style={styles.btnContainer}>

<TouchableOpacity style={styles.btnlogin}   onPress={Loginhandle} >  

<Text style={styles.btnText}>LOGIN </Text>

</TouchableOpacity>



<TouchableOpacity style={[styles.btnlogin, style=styles.btnLine]}  onPress={() =>navigation.navigate('signup')} >  

<Text style={styles.btnTextR}> REGISTER </Text>

</TouchableOpacity>



  </View> 



  </ImageBackground>
  

  )
}





const styles = StyleSheet.create({




container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  marginBottom:-120,
  marginTop:-150,

},

inputcontainer:{
  width: '80%'

},

btnContainer:{
width:'65%',
justifyContent:'center',
alignItems:'center',
marginTop:70,
},

input:{
backgroundColor:'white',
paddingHorizontal: 15,
paddingVertical:10,
borderRadius: 10,
marginTop:6,
},

btnlogin:{
  backgroundColor:'#4CBB17',
  width:'100%',
  padding:15,
  borderRadius:10,
 alignItems:'center'
},

btnText:{
  color:'white',
  fontWeight: '700',
  fontSize: 20,

},
btnLine:{

  backgroundColor:'#C1E1C1',
  marginTop:5,
  borderColor: '#4CBB17',
  borderWidth:3,
},

btnTextR:{
   color:'#4CBB17',
  fontWeight: '700',
  fontSize: 20,
},


Imagehead:{
height: 170,
width:170,

justifyContent:'center',
alignItems:'center',

},
HeaderText:{
  color:'white',
  fontWeight:'bold',
  border:10,
  borderColor:'white',
  borderRadius:4,
  marginBottom:15,
  fontSize:25,
  padding:2,
  borderWidth:2,
  
  
},

Top:{
  height:' 40%',
  justifyContent:'center',
  alignItems:'center',
  marginBottom:-70,
  
}



})
