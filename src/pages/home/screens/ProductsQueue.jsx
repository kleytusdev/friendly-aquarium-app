import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CartCounter from "./CartCounter";
import { COLORS } from "../../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductsQueue = () => {

  return (
    <SafeAreaView style={styles.body}>

      <CartCounter />
    </SafeAreaView>
  );
};

export default ProductsQueue;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 30,
  },
});
