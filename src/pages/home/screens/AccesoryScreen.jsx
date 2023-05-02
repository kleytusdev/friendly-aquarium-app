import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import CardScreen from "../components/CardScreen";
import { ROUTES, COLORS } from "../../../constants";
import { useNavigation } from '@react-navigation/native';

const AccesoryScreen = () => {

  const navigation = useNavigation();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/filtro.png"),
                name: "Filtro Mochila",
                price: "75.00",
              })}
              imageWidth={130}
              imageHeight={130}
              top={-50}
              sourceImage={require('../../../assets/pngs/filtro.png')}
              name={'Filtro Mochila'}
              price={'75.00'}
              backgroundColorState={COLORS.secondary}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/adorno.png"),
                name: "Adorno cueva",
                price: "45.00",
              })}
              imageWidth={110}
              imageHeight={110}
              top={-45}
              sourceImage={require('../../../assets/pngs/adorno.png')}
              name={'Adorno cueva'}
              price={'45.00'}
              backgroundColorState={COLORS.secondary}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/accesorio-33.png"),
                name: "Sustrato",
                price: "30.00",
              })}
              imageWidth={110}
              imageHeight={110}
              top={-45}
              sourceImage={require('../../../assets/pngs/accesorio-33.png')}
              name={'Sustrato'}
              price={'30.00'}
              backgroundColorState={COLORS.secondary}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/accesorio-box.png"),
                name: "Cartucho de filtro",
                price: "33.00",
              })}
              imageWidth={110}
              imageHeight={110}
              top={-45}
              sourceImage={require('../../../assets/pngs/accesorio-box.png')}
              name={'Cartucho de filtro'}
              price={'33.00'}
              backgroundColorState={COLORS.secondary}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/accesorio-temp.png"),
                name: "Termostato",
                price: "28.00",
              })}
              imageWidth={110}
              imageHeight={110}
              top={-45}
              sourceImage={require('../../../assets/pngs/accesorio-temp.png')}
              name={'Termostato'}
              price={'28.00'}
              backgroundColorState={COLORS.secondary}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AccesoryScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardContainer: {
    flexBasis: '50%',
    paddingHorizontal: 5,
    marginTop: 60,
  },
});
