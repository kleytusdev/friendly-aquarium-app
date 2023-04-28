import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardScreen from "../components/CardScreen";
import { COLORS } from "../../../constants";

const AccesoryScreen = () => {
  return (
    <View style={styles.body}>
      <CardScreen
        imageWidth={130}
        imageHeight={130}
        top={-60}
        sourceImage={require('../../../assets/pngs/filtro.png')}
        name={'Coral'}
        price={'75'}
        backgroundColorState={COLORS.lightSkyBlue}
        nameState={'Descuento 5%'}
      />
      <CardScreen 
        imageWidth={110}
        imageHeight={110}
        top={-55}
        sourceImage={require('../../../assets/pngs/coral1.png')}
        name={'Coral'}
        price={'140'}
        backgroundColorState={COLORS.lightSkyBlue}
        nameState={'Descuento 10%'}
      />
    </View>
  );
};

export default AccesoryScreen;

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
