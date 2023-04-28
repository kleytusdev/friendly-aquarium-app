import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";

const StartExplore = () => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <View style={styles.circle} />
        <Text style={styles.buttonText}>Únete ahora</Text>
        <Ionicons
          name="arrow-forward-sharp"
          size={20}
          color={COLORS.extraGray}
        />
      </View>
    </TouchableOpacity>
  );
};

export default StartExplore;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primaryLight,
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 6,
    justifyContent: "space-between",
    marginTop: 10,
    overflow: "hidden",
  },
  circle: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  square: {
    padding: 20,
    backgroundColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontFamily: 'Poppins-Regular'
  },
});
