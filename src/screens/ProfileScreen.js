import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header name={"Profile"}/>
      <View style={styles.text}>
      <Text>ProfileScreen</Text>
      </View>
      
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  text:{
    marginTop:75,
    justifyContent:"center",
    alignItems:"center",
  }
})