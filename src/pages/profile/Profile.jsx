import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ROUTES, COLORS } from '../../constants';

const Profile = () => {
  return (
    <View style={ styles.body }>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white, flex:1, justifyContent:'center', alignItems:'center'
  }
})