import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import CardScreen from "../components/CardScreen";
import { COLORS } from "../../../constants";

const FishScreen = () => {
  return (
    <View style={styles.body}>
      <CardScreen
        imageWidth={200}
        imageHeight={200}
        top={-100}
        sourceImage={require('../../../assets/pngs/disco-blue.png')}
        name={'Disco'}
        price={'55'}
        backgroundColorState={COLORS.lightSkyBlue}
        nameState={'Descuento 10%'}
      />
      <CardScreen 
        imageWidth={150}
        imageHeight={150}
        top={-66}
        sourceImage={require('../../../assets/pngs/disco-orange.png')}
        name={'Disco'}
        price={'65'}
        backgroundColorState={COLORS.lightSkyBlue}
        nameState={'Discponible'}
      />
    </View>
  );
};

export default FishScreen;

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
