import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ROUTES, COLORS } from '../../constants';

const Product = () => {
  return (
    <View style={ styles.body }>
      <Text>Product</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white, flex:1, justifyContent:'center', alignItems:'center'
  }
})