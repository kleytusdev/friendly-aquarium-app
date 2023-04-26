import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from '../../constants';
import CardPurchaseStatus from './components/CardPurchaseStatus';
import Betta from "../../assets/pngs/betta.png"
import Ciclido from "../../assets/pngs/ciclido.png"
import Escalar from "../../assets/pngs/escalar.png"
import Goldfish from "../../assets/pngs/goldfish.png"
import Leon from "../../assets/pngs/pez-leon.png"
import Mariposa from "../../assets/pngs/pez-mariposa.png"

const Shopping = () => {
  return (
    <SafeAreaView style={ styles.body }>
      <View style={ styles.header }>
        <Text style={ styles.title }>Explora tu</Text>
        <Text style={ styles.title }>Historial de Pedidos</Text>
        <Text style={ styles.subtitle }>Tus pedidos en un solo lugar</Text>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardPurchaseStatus 
            image={<Image source={Ciclido} style={{ width: "100%", height: 150, alignSelf: "center" }} />}
            product={'Ciclido'}
            date={'Enero 15 2023'}
            price={'64.00'}
            status={'PENDIENTE'}
          />
          <CardPurchaseStatus 
            image={<Image source={Escalar} style={{ width: "100%", height: 150, alignSelf: "center" }} />}
            product={'Escalar'}
            date={'Febrero 02 2023'}
            price={'35.00'}
            status={'PENDIENTE'}
          />
          <CardPurchaseStatus 
            image={<Image source={Betta} style={{ width: "100%", height: 150, alignSelf: "center" }} />}
            product={'Betta'}
            date={'Diciembre 11 2022'}
            price={'55.00'}
            status={'ADQUIRIDO'}
          />
          <CardPurchaseStatus 
            image={<Image source={Goldfish} style={{ width: "100%", height: 150, alignSelf: "center" }} />}
            product={'Goldfish'}
            date={'Noviembre 22 2022'}
            price={'30.00'}
            status={'ADQUIRIDO'}
          />
          <CardPurchaseStatus 
            image={<Image source={Leon} style={{ width: "100%", height: 150, alignSelf: "center" }} />}
            product={'Pez Leon'}
            date={'Noviembre 10 2022'}
            price={'169.00'}
            status={'ADQUIRIDO'}
          />
          <CardPurchaseStatus 
            image={<Image source={Mariposa} style={{ width: "100%", height: 150, alignSelf: "center" }} />}
            product={'Pez Mariposa'}
            date={'Octubre 25 2022'}
            price={'S/ 110.00'}
            status={'ADQUIRIDO'}
          />
        </ScrollView>
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