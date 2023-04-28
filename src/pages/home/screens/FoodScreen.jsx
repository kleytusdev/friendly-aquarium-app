import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardScreen from "../components/CardScreen";
import { COLORS } from "../../../constants";

const FoodScreen = () => {
  return (
    <View style={styles.body}>
      <CardScreen
        imageWidth={150}
        imageHeight={150}
        top={-85}
        sourceImage={require('../../../assets/pngs/Food1.png')}
        name={'Hojuelas'}
        price={'18'}
        backgroundColorState={COLORS.lightSkyBlue}
        nameState={'Disponible'}
      />
      <CardScreen 
        imageWidth={140}
        imageHeight={110}
        top={-55}
        sourceImage={require('../../../assets/pngs/Food2.png')}
        name={'Granulado'}
        price={'25'}
        backgroundColorState={COLORS.lightSkyBlue}
        nameState={'Descuento 5%'}
      />
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
