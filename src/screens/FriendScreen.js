import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { API } from '../constants'
import { borderRadius, colors, screenWidth } from '../common/styles'
import Preloader from '../components/Preloader'

const FriendScreen = () => {
  const [state, setState] = useState()
  const [load, setLoad] = useState(false)

  const getFrineds = async () => {
    try {
      setLoad(true)
      const req = await fetch(API)
      const res = await req.json()
      console.log(res.results)
      setState(res.results)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFrineds()
  }, [])

  return (
    <View style={styles.container}>
      <Header name={'Friends'} />
        {load ? (
          <View>
          <Preloader/>
          </View>
        ) : (
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.visible}>
            {state?.map((el, index) => {
              const img = el.picture.large
              return (
                <View key={index} style={styles.card}>
                  <Text>
                    {el.name.title} {el.name.first} {el.name.last}
                  </Text>
                  <Image
                    source={{ uri: img }}
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: borderRadius.large,
                    }}
                  />
                  <Text>Phone number: {el.phone}</Text>
                  <Text>
                    Address: {el.location.country} {el.location.city}{' '}
                    {el.location.street.name} {el.location.street.number}
                  </Text>
                </View>
              )
            })}
          </View>
          </ScrollView>
        )}
    </View>
  )
}

export default FriendScreen

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    marginHorizontal: screenWidth * 0.25,
    width: screenWidth * 0.6,
  },
  visible: {
    marginBottom: 200,
  },
  container:{
  backgroundColor:colors.violet,
  }
})
