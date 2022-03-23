import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,TextInput,Button } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import { GET_ALL_COCKTAILS } from '../constants'
import { useEffect } from 'react'
import { borderRadius, colors } from '../common/styles'
import { useNavigation } from '@react-navigation/native'



const Bar = () => {
  const [state,setState]=useState()
  const [load,setLoad]=useState(false)

  const Coctails=async()=>{
    const req=await fetch(GET_ALL_COCKTAILS)
    const res=await req.json()
    console.log(res.drinks);
    setState(res.drinks)
    setLoad(false)
  }
  useEffect(()=>{
    Coctails()
  },[])
  const navigation=useNavigation()
  
          return (
     
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Header name={'Bar'}/>
    <TextInput style={styles.input}>
    
    </TextInput>
    <Button  title='Search' color="red" onPress={()=>navigation.navigate('Sales')} style={styles.btn}/>
    {
    state?.map
    ((el, index) => { 
    const img = el.strDrinkThumb
        
          return ( 
            <TouchableOpacity  onPress={() => navigation.navigate('Sales')}>
            <View key={index} style={styles.card}> 
              <Text> 
                {el.strDrink}
              </Text> 
              <Image 
                source={{ uri: img }} 
                style={{ width: 200, height: 200, borderRadius:borderRadius.large}} 
              /> 
             
            </View> 
            </TouchableOpacity>
          ) 
        })
        
      }
      </ScrollView>

    </View>
  )
}

export default Bar

const styles = StyleSheet.create({

 card:{
   marginLeft:80,
 },
 container:{
   backgroundColor:colors.reflect
 },
 input:{
   backgroundColor:colors.white,
   width:200,
   height:35,
   marginTop:5,
   marginLeft:85,
   borderRadius:borderRadius.small,
   color:colors.violet
 },

})