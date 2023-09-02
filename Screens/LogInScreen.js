import {SafeAreaView, StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import React from 'react'


export default function LoginScreen() {
    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.textheader}>VISION</Text>
        <Text style={styles.textbody}>By Aabhas</Text>
        <TextInput placeholder="Username/Email Address" style={styles.username}></TextInput>
        <TextInput secureTextEntry={true}
                    returnKeyType="go"
                    placeholder="Password" 
                    style={styles.password}></TextInput>
        <Button title="Log In"
                style={styles.buttonlogin}
                onPress={() => Alert.alert('Welcome to VISION')}
            />

        <Button title="Forgot Password?"
                style={styles.forgotpasswordbutton}
                onPress={() =>Alert.prompt('GO tosigin page') }
            />
      </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: '1',
      backgroundColor: '#eeff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    textheader:{
      color: '#4ADEDE',
      fontSize: '40px',
      textAlign: 'top',
      paddingTop: 100,
    },

    textbody:{
      color: '#4ADEDE',
      fontSize: '20px',
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 120,
    },

    username:{
      color: '#grey',
      fontSize: '20px',
      textAlign: 'center', 
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 2,    
     
    },
    password:{
      color: '#grey',
      fontSize: '20px',
      textAlign: 'center', 
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 2,    
       marginVertical: 50,
      
    },
    buttonlogin: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 30,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    forgotpasswordbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
      backgroundColor: 'black',
      marginVertical: 50,
    },
  });