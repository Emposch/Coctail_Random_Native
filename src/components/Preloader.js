import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, screenHeight, screenWidth } from '../common/styles'

const Preloader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.white} />
    </View>
  )
}

export default Preloader

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: screenWidth * 1,
    height: screenHeight * 1,
    alignItems: 'center',
    zIndex: 2,
    paddingTop: 270,
    backgroundColor: colors.dark
  },
})
