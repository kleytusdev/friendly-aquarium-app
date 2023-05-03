import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../../../constants";

const Input = ({ placeholder, onChangeText, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = [
    styles.input,
    isFocused && styles.inputFocused,
  ];

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        style={inputStyles}
        placeholder={placeholder}
        placeholderTextColor={COLORS.white}
        onFocus={handleFocus}
        onBlur={handleBlur}
        selectionColor={COLORS.white}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontFamily: "Poppins-Regular",
    backgroundColor: COLORS.background,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 7,
    width: 280,
    color: COLORS.white,
  },
  inputFocused: {
    backgroundColor: COLORS.gray,
  },
});
