import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES, COLORS } from "../../../constants";

const Button = ({ onPress, name, backgroundColor, borderWidth, borderColor, textColor }) => {
  
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.button, { backgroundColor, borderWidth, borderColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonTextLogin, { color: textColor }]}>
        {name}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 10,
    width: 280,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonTextLogin: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.white,
    fontSize: 13,
  },
});