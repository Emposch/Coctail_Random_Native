import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors, screenHeight } from '../common/styles'


const HomeScreen = () => {
  const a = [1, 2, 3,]
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Wallet', {a:a})}
        style={styles.text}
      >
        <Text>Go To Wallet Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    color: colors.dark,
    // marginTop:'20%',
  },
  container: {
    height: screenHeight * 0.8,
  },
})
