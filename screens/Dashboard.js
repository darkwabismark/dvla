import { StyleSheet, Text, View, TouchableOpacity, TextInput,ImageBackground } from 'react-native';
import React from 'react';
//import Icon from 'react-native-ico-material-design';
import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



//Screens

import addcar from '../screens/AddCar';        
import addDv from '../screens/AddDV';
import logcar from '../screens/LogCar';
import main from '../screens/MainHome';




 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
  
      <Tab.Navigator>
        <Tab.Screen   name="Home" component={main} />
        <Tab.Screen name="ADD CAR" component={addcar} />
        <Tab.Screen name="LOG CAR" component={logcar} />
        <Tab.Screen name="ADD-DV" component={addDv} />

      </Tab.Navigator>
    
  );
}



 






const styles = StyleSheet.create({

container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',

}

})
