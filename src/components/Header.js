import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { baseText, borderRadius, colors } from '../common/styles'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Header = (props) => {
  const navigation = useNavigation() 
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
 <View style={styles.container}>
    <View style={styles.content}>
            <AntDesign name="doubleleft" size={24} color="black" />
      <Text style={[baseText.textH2]}>{props.name}</Text>
    </View>
    </View>
    </TouchableOpacity>
   
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.white,
    marginTop: 30,
    borderRadius: borderRadius.medium,
  },
  content:{
    flexDirection:'row',
    paddingVertical:20,
    justifyContent:'space-around',
    width:'30%'
  }
})
