import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CartCounter from "./CartCounter";
import { ROUTES, COLORS } from "../../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from './CartContext';
import { useNavigation } from '@react-navigation/native';

const ProductsQueue = () => {

  const navigation = useNavigation();

  const { products } = useContext(CartContext);

  const handleBuyAll = () => {
    const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
    const totalPrice = products.reduce((acc, product) => acc + product.totalPrice, 0);
  
    const purchaseData = {
      products,
      totalQuantity,
      totalPrice,
    };
  
    navigation.navigate(ROUTES.PURCHARSE, purchaseData);
  };

  return (
    <SafeAreaView style={styles.body}>
      <CartCounter />

      <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical:20 }}>
        <TouchableOpacity style={styles.button} onPress={handleBuyAll}>
          <Text style={{ fontFamily: 'Poppins-Regular', color: COLORS.white, fontSize: 14 }}>Comprar</Text>
        </TouchableOpacity>  
      </View>
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
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.jetBlack,
    borderRadius: 10
  }
});
