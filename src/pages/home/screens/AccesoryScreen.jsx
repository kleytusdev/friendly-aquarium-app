import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardScreen from "../components/CardScreen";
import { COLORS } from "../../../constants";

const AccesoryScreen = () => {
  return (
    <View style={styles.body}>
      <CardScreen />
      <CardScreen />
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
