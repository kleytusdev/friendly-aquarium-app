import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants';
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from './components/Slider';
import CardExplore from './components/CardExplore';

const Favorite = () => {
  return (
    <SafeAreaView style={ styles.body }>
      <View style={ styles.header }>
        <Text style={ styles.title }>Explora tu</Text>
        <Text style={ styles.title }>Historial de Pedidos</Text>
        <Text style={ styles.subtitle }>Tus pedidos en un solo lugar</Text>
      </View>
      <Slider/>
      <CardExplore />
    </SafeAreaView>
  )
}

export default Favorite

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginVertical: 30,
    paddingHorizontal: 20

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