import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import CardScreen from "../components/CardScreen";
import { ROUTES, COLORS } from "../../../constants";
import { useNavigation } from '@react-navigation/native';

const FishScreen = () => {

  const navigation = useNavigation();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: COLORS.background }}>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/disco-blue.png"),
                name: "Disco azul",
                price: "55.00",
              })}
              imageWidth={200}
              imageHeight={200}
              top={-100}
              sourceImage={require("../../../assets/pngs/disco-blue.png")}
              name={"Disco Azul"}
              price={"65.00"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/disco-orange.png"),
                name: "Disco naranja",
                price: "65.00",
              })}
              imageWidth={150}
              imageHeight={150}
              top={-66}
              sourceImage={require("../../../assets/pngs/disco-orange.png")}
              name={"Disco Naranja"}
              price={"75.00"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/escalar.png"),
                name: "Escalar Albino",
                price: "65.00",
              })}
              imageWidth={150}
              imageHeight={150}
              top={-50}
              sourceImage={require("../../../assets/pngs/escalar.png")}
              name={"Escalar Albino"}
              price={"35.00"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/ciclido.png"),
                name: "Ciclido",
                price: "45.00",
              })}
              imageWidth={150}
              imageHeight={150}
              top={-70}
              sourceImage={require("../../../assets/pngs/ciclido.png")}
              name={"Ciclido"}
              price={"45.00"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/fish-betta-green.png"),
                name: "Betta Dumbo",
                price: "67.00",
              })}
              imageWidth={150}
              imageHeight={150}
              top={-70}
              sourceImage={require("../../../assets/pngs/fish-betta-green.png")}
              name={"Betta Dumbo"}
              price={"67.00"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/fish-clown.png"),
                name: "Pez Payaso",
                price: "120.00",
              })}
              imageWidth={150}
              imageHeight={150}
              top={-70}
              sourceImage={require("../../../assets/pngs/fish-clown.png")}
              name={"Pez Payaso"}
              price={"120.00"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/goldfish-calico.png"),
                name: "GoldFish Calico",
                price: "49.00",
              })}
              imageWidth={150}
              imageHeight={150}
              top={-70}
              sourceImage={require("../../../assets/pngs/goldfish-calico.png")}
              name={"GoldFish Calico"}
              price={"49.00"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {
                sourceImage: require("../../../assets/pngs/fish-arcoiris.png"),
                name: "Tail-Spot Wrasse",
                price: "45.00",
              })}
              imageWidth={150}
              imageHeight={150}
              top={-70}
              sourceImage={require("../../../assets/pngs/fish-arcoiris.png")}
              name={"Tail-Spot Wrasse"}
              price={"45.00"}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default FishScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: COLORS.background,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  cardContainer: {
    flexBasis: "50%",
    paddingHorizontal: 5,
    marginTop: 60,
  },
});
