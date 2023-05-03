import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import CardScreen from "../components/CardScreen";
import { ROUTES, COLORS } from "../../../constants";
import { useNavigation } from '@react-navigation/native';

const FoodScreen = () => {

  const navigation = useNavigation();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                product: {
                  sourceImage: require('../../../assets/pngs/food-black.png'),
                  name: "Granulado",
                  price: "30.00",
                }
              })}
              imageWidth={110}
              imageHeight={110}
              top={-40}
              sourceImage={require('../../../assets/pngs/food-black.png')}
              name={'Granulado'}
              price={'35.00'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 5%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                product: {
                  sourceImage: require('../../../assets/pngs/food-black-blue.png'),
                  name: "Granulado",
                  price: "30.00",
                }
              })}
              imageWidth={140}
              imageHeight={110}
              top={-40}
              sourceImage={require('../../../assets/pngs/food-black-blue.png')}
              name={'Granulado'}
              price={'35.00'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 5%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                product: {
                  sourceImage: require('../../../assets/pngs/food-goldfish.png'),
                  name: "Granulado",
                  price: "30.00",
                }
              })}
              imageWidth={140}
              imageHeight={110}
              top={-40}
              sourceImage={require('../../../assets/pngs/food-goldfish.png')}
              name={'Granulado'}
              price={'30.00'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 5%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                product: {
                  sourceImage: require('../../../assets/pngs/Food-Orange.png'),
                  name: "Granulado",
                  price: "30.00",
                }
              })}
              imageWidth={140}
              imageHeight={110}
              top={-40}
              sourceImage={require('../../../assets/pngs/Food-Orange.png')}
              name={'Granulado'}
              price={'40.00'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 5%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                product: {
                  sourceImage: require('../../../assets/pngs/accesorio-tropical.png'),
                  name: "Granulado",
                  price: "30.00",
                }
              })}
              imageWidth={95}
              imageHeight={95}
              top={-40}
              sourceImage={require('../../../assets/pngs/accesorio-tropical.png')}
              name={'Granulado tropical'}
              price={'45.00'}
              backgroundColorState={COLORS.secondary}
              nameState={'Descuento 10%'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                product: {
                  sourceImage: require('../../../assets/pngs/Food1.png'),
                  name: "Hojuelas",
                  price: "18.00",
                }
              })}
              imageWidth={130}
              imageHeight={130}
              top={-60}
              sourceImage={require('../../../assets/pngs/Food1.png')}
              name={'Hojuelas'}
              price={'18.00'}
              backgroundColorState={COLORS.secondary}
              nameState={'Disponible'}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen 
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                product: {
                  sourceImage: require('../../../assets/pngs/Food2.png'),
                  name: "Granulado",
                  price: "20.00",
                }
              })}
              imageWidth={90}
              imageHeight={90}
              top={-30}
              sourceImage={require('../../../assets/pngs/Food2.png')}
              name={'Granulado'}
              price={'20.00'}
              backgroundColorState={COLORS.secondary}
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
