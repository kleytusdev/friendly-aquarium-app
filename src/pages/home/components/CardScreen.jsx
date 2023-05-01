import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'
import MiniStat from '../../profile/components/MiniStat'

const CardScreen = ({ sourceImage, name, price, top, imageWidth, imageHeight, backgroundColorState, nameState }) => {

  return (
    <>
      <View style={styles.card}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Image style={[styles.image, { top: top, width: imageWidth, height: imageHeight }]} source={sourceImage}/>
        </View>
          <MiniStat styleText={{ fontSize: 10 }} backgroundColor={backgroundColorState} name={nameState}/>
        <View style={[styles.textContainer, {flex: 1, alignItems: 'center', justifyContent: 'flex-end' }]}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>S/ {price}</Text>
        </View>
      </View>
    </>
  )
}

export default CardScreen

const styles = StyleSheet.create({
  card: {
    height: 170,
    backgroundColor: COLORS.jetBlack,
    borderRadius: 26,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    position: 'absolute',
  },
  textContainer: {
    marginBottom: 20,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: COLORS.white,
  },
  price:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: COLORS.white
  }
})
