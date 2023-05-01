import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { ROUTES, COLORS } from "../../../constants";

const MiniCardCategory = ({ name, focused }) => {
  return (
    <TouchableOpacity style={[styles.button, focused && styles.focusedButton]}>
      <Text style={[styles.buttonText, focused && styles.focusedButtonText]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default MiniCardCategory;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.white,
    width: 95,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    flexShrink: 1,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 3,
  },
  buttonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: COLORS.primary,
    alignSelf: "center",
    justifyContent: "center",
  },
  focusedButton: {
    backgroundColor: COLORS.jetBlack,
  },
  focusedButtonText: {
    color: COLORS.white,
  },
});
