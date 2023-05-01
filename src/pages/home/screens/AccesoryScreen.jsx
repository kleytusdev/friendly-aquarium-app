import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import CardScreen from "../components/CardScreen";
import { COLORS } from "../../../constants";

const AccesoryScreen = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <CardScreen
              imageWidth={130}
              imageHeight={130}
              top={-60}
              sourceImage={require('../../../assets/pngs/filtro.png')}
              name={'Coral'}
              price={'75'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 5%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              imageWidth={110}
              imageHeight={110}
              top={-55}
              sourceImage={require('../../../assets/pngs/adorno.png')}
              name={'Adorno cueva'}
              price={'45'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 10%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              imageWidth={110}
              imageHeight={110}
              top={-55}
              sourceImage={require('../../../assets/pngs/adorno.png')}
              name={'Otro adorno'}
              price={'45'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 10%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              imageWidth={110}
              imageHeight={110}
              top={-55}
              sourceImage={require('../../../assets/pngs/adorno.png')}
              name={'Adorno 3'}
              price={'45'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 10%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              imageWidth={110}
              imageHeight={110}
              top={-55}
              sourceImage={require('../../../assets/pngs/adorno.png')}
              name={'Otro adorno 4'}
              price={'45'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 10%'}
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
