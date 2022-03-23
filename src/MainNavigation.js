import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bar from './screens/Bar';
import FriendScreen from './screens/FriendScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors, screenHeight } from './common/styles';
import { Platform } from 'react-native';


// Screen names 
const basket = 'Bar';
const friend = 'Friend'
const profile = 'Profile'
const home = 'Home'

const Tab = createBottomTabNavigator()    
const MainNavigation = () => {
  return (
     <Tab.Navigator
     initialRouteName={home}
     screenOptions = {({route}) =>({
         tabBarIcon:({focused,color,size}) =>{
            let iconName;
            let rn = route.name 
            if(rn == home){
                iconName = focused ?  'home' : 'home'
            }else if(rn == profile){
                iconName = focused ?  'user' : 'user'
            }else if(rn == basket){
                iconName = focused ? 'wine-bottle' : 'wine-bottle'
            }else if(rn == friend){
                iconName = focused ? 'users' : 'users'
            }
            return <FontAwesome5 name={iconName} size={size} color={color}/>
         },
         tabBarActiveTintColor:colors.clear,
         tabBarInactiveTintColor:colors.dark,
         tabBarShowLabel:true,
         tabBarStyle:{
             backgroundColor:colors.soft,
             paddingVertical:Platform.OS === 'ios' ? 10 : 0 ,
             height:screenHeight*0.1,
         }
     })}
     >
         <Tab.Screen name = {basket} component={Bar} options={{headerShown:false}}/>
         <Tab.Screen name = {friend} component={FriendScreen} options={{headerShown:false}} />
         <Tab.Screen name = {profile} component={ProfileScreen} options={{headerShown:false}}/>
         <Tab.Screen name = {home} component={HomeScreen} options={{headerShown:false}}/>
          </Tab.Navigator>
  )
}

export default MainNavigation

