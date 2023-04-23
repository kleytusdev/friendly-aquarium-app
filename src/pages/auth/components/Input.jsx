import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { COLORS } from "../../../constants";

const Input = ({ placeholder }) => {


  return (
    <TextInput style={styles.input} placeholder={placeholder} />
  );
};

export default Input;

const styles = StyleSheet.create({
  
  input: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 7,
    width: 280,
  },
});
