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
        <Text style={ styles.title }>Tus Colecciones</Text>
        <Text style={ styles.title }>Favoritas</Text>
        <Text style={ styles.subtitle }>Aquí podrás encontrar los posts más importantes para tí, que lo disfrutes.</Text>
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
    backgroundColor: COLORS.background,
  },
  header: {
    marginVertical: 30,
    paddingHorizontal: 20

  },
  title: {
    lineHeight: 35,
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white
  },
  subtitle: {
    color: COLORS.gunmetal,
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    marginVertical: 5
  }
})