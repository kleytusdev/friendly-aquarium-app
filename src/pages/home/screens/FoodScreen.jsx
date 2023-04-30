import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import CardScreen from "../components/CardScreen";
import { COLORS } from "../../../constants";

const FoodScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <CardScreen
              imageWidth={150}
              imageHeight={150}
              top={-80}
              sourceImage={require('../../../assets/pngs/Food1.png')}
              name={'Hojuelas'}
              price={'18'}
              backgroundColorState={COLORS.lightSkyBlue}
              nameState={'Disponible'}
            />
          </View>
          <View style={styles.cardContainer}>
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
          <View style={styles.cardContainer}>
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
          <View style={styles.cardContainer}>
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
        </View>
      </ScrollView>
    </>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: COLORS.white,
    justifyContent: 'space-between'
  },
  cardContainer: {
    flexBasis: '50%',
    marginBottom: 10,
    marginTop: 60,
  },
});
