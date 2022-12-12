import { StyleSheet, Text, View ,TextInput, KeyboardAvoidingView,TouchableWithoutFeedback,Button } from 'react-native'
import React from 'react'

export default function AddDV() {
  return (
  




<KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>ADD DV</Text>
            <TextInput placeholder="Enter Dv Number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
             <TextInput placeholder="Enter Year" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}  />
            
            <Button buttonStyle={styles.loginButton}  title="ADD DV" />
            
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({

containerView: {
    flex: 1,
    alignItems: "center"
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});

