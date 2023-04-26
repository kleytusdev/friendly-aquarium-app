import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const MiniStat = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default MiniStat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightSkyBlue,
    borderRadius: 10,
    paddingHorizontal: 7,
    maxWidth: 65
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.primary,
    fontSize: 10,
    textAlign: "center",
    justifyContent: "center",
  },
});
