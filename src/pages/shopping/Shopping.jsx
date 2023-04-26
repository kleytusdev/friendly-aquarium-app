import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants';
import { SafeAreaView } from "react-native-safe-area-context";

const Shopping = () => {
  return (
    <SafeAreaView style={ styles.body }>
      <View style={ styles.header }>
        <Text style={ styles.title }>Explora tu</Text>
        <Text style={ styles.title }>Historial de Pedidos</Text>
        <Text style={ styles.subtitle }>Tus pedidos en un solo lugar</Text>
      </View>
    </SafeAreaView>
  )
}

export default Shopping

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20
  },
  header: {
    marginVertical: 30,
  },
  title: {
    lineHeight: 35,
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold'
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginVertical: 5
  }
})