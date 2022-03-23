import { StyleSheet, Text, View, TouchableOpacity } from 'react-native' 
import React from 'react' 
import { useNavigation } from '@react-navigation/native' 
import { baseText, borderRadius, colors } from '../common/styles' 
import { LinearGradient } from 'expo-linear-gradient' 
 
const WalletScreen = ({route}) => { 
  const navigation = useNavigation() 
  const a= route.params; 
  console.log(a); 
  return ( 
    <View style={styles.container}> 
    <TouchableOpacity 
    onPress={() => navigation.navigate('MainNavigation')} 
    > 
    <LinearGradient  
     colors={['#B00020', '#B4D4ED', '#B00020']} 
     style={styles.btn} 
    > 
        <Text style={[baseText.textH4]}>Open Tab Screen</Text> 
      </LinearGradient> 
      </TouchableOpacity> 
    </View> 
  ) 
} 
 
export default WalletScreen 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  btn:{ 
    borderRadius: borderRadius.large, 
    padding:10, 
  }, 
  baseText:{
    flex:1,
    justifyContent:"center",
    alignContent:"center"
  }
})