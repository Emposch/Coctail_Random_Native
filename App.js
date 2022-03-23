import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import StackNavigation from './src/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'



const App = () => {

  let [fontsLoaded] = useFonts({
    'semiBold': require('./assets/Font/SyneMono/SyneMono-Regular.ttf'),
    'medium': require('./assets/Font/SyneMono/SyneMono-Regular.ttf'),
    'bold': require('./assets/Font/SyneMono/SyneMono-Regular.ttf'),
    'thin': require('./assets/Font/SyneMono/SyneMono-Regular.ttf'),
  })

  if(!fontsLoaded){
    return<></>
  }else
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}


export default App

