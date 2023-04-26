import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ROUTES, COLORS } from '../../constants';

const Favorites = () => {
  return (
    <View style={ styles.body }>
      <Text>Favorites</Text>
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white, flex:1, justifyContent:'center', alignItems:'center'
  }
})