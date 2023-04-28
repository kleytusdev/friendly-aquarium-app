import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../constants";
import StartExplore from "./StartExplore";

const CardExplore = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.textTop}>Explora nuevos productos</Text>
      <Text style={styles.textBottom}>Friendly Aquarium</Text>
      <StartExplore />
    </View>
  );
};

export default CardExplore;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 35,
    marginHorizontal: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  textTop: {
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    color: COLORS.white

  },
  textBottom: {
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    color: COLORS.white

  },
});
