import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import CardScreen from "../components/CardScreen";
import { COLORS } from "../../../constants";

const FishScreen = () => {
  return (
    <>
    
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <CardScreen
              imageWidth={200}
              imageHeight={200}
              top={-100}
              sourceImage={require("../../../assets/pngs/disco-blue.png")}
              name={"Disco"}
              price={"55"}
              backgroundColorState={COLORS.secondary}
              nameState={"Descuento 10%"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              imageWidth={150}
              imageHeight={150}
              top={-66}
              sourceImage={require("../../../assets/pngs/disco-orange.png")}
              name={"Disco"}
              price={"65"}
              backgroundColorState={COLORS.secondary}
              nameState={"Disponible"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              imageWidth={150}
              imageHeight={150}
              top={-66}
              sourceImage={require("../../../assets/pngs/disco-orange.png")}
              name={"Disco"}
              price={"65"}
              backgroundColorState={COLORS.secondary}
              nameState={"Disponible"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              imageWidth={150}
              imageHeight={150}
              top={-66}
              sourceImage={require("../../../assets/pngs/disco-orange.png")}
              name={"Disco"}
              price={"65"}
              backgroundColorState={COLORS.secondary}
              nameState={"Disponible"}
            />
          </View>
          <View style={styles.cardContainer}>
            <CardScreen
              imageWidth={150}
              imageHeight={150}
              top={-66}
              sourceImage={require("../../../assets/pngs/disco-orange.png")}
              name={"Disco"}
              price={"65"}
              backgroundColorState={COLORS.secondary}
              nameState={"Disponible"}
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
