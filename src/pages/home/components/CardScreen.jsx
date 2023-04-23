import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'

const { width, height } = Dimensions.get('window')

const CardScreen = () => {
  return (
    <>
      <View style={[styles.card, {padding: width * 0.21}]}></View>
    </>
  )
}

export default CardScreen

const styles = StyleSheet.create({

  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 26,
    marginTop: 10
  }
})
