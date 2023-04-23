import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ROUTES, COLORS } from '../../constants';

const Category = () => {
  return (
    <View style={ styles.body }>
      <Text>Category</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white, flex:1, justifyContent:'center', alignItems:'center'
  }
})