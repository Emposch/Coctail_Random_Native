import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WalletScreen from './screens/WalletScreen'
import SaleScreen from './screens/SaleScreen'
import MainNavigation from './MainNavigation'

const StackNavigation = () => {

    const Stack = createStackNavigator()

  return ( 
    <Stack.Navigator>
        <Stack.Group>
        <Stack.Screen name='MainNavigation' options={{headerShown:false}} component={MainNavigation}/>
            <Stack.Screen name='Wallet' options={{headerShown:false}} component={WalletScreen}/>
            <Stack.Screen name='Sales' options={{headerShown:false}} component={SaleScreen}/>
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})