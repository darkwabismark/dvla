import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import signup  from './screens/SignUp';
import dashboard from './screens/Dashboard'
import addcar from './screens/AddCar';
import addDv from './screens/AddDV';





const Stack = createNativeStackNavigator();






export default function App({navigation}) {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={ { headerShown:false} } name="Login" component={LoginScreen} /> 
        <Stack.Screen  options={{ headerShown:false}} name="signup" component={signup} /> 
        <Stack.Screen  options={{ headerShown:false}} name="dashboard" component={dashboard} /> 
      </Stack.Navigator>
    </NavigationContainer>


    
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
