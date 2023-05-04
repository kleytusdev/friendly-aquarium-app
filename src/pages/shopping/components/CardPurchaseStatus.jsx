import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";
import IconShoppingCart from "../../../assets/svgs/shopping-cart.svg";
import MiniStat from "../../profile/components/MiniStat";
import { Ionicons } from '@expo/vector-icons';

const CardPurchaseStatus = ({ image, product, date, price, status, onPressPurchase }) => {


  return (
    <>
      <View style={styles.container}>
        <View style={styles.photoContainer}>{image}</View>
        <View style={styles.infoContainer}>
          <Text style={styles.textProduct}>{product}</Text>
          <Text style={styles.textDate}>{date}</Text>
          <Text style={styles.textPrice}>S/ {price}</Text>
          <MiniStat
            name={status}
            backgroundColor={
              status === "ADQUIRIDO"
                ? "#5E7E54"
                : status === "PENDIENTE"
                ? "#D46A6A"
                : COLORS.primary
            }
            styleText={{ color: COLORS.white, fontSize: 10, fontFamily: 'Poppins-Bold' }}
          />
        </View>
        <TouchableOpacity 
          onPress={onPressPurchase}
          style={styles.statusContainer}>
          <Ionicons name='information-circle' color={COLORS.gray} size={30} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CardPurchaseStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.jetBlack,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  photoContainer: {
    flex: 0.8,
  },
  infoContainer: {
    flex: 0.8,
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 4,
  },
  statusContainer: {
    flex: 0.4,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  textProduct: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.white,
    fontSize: 17,
  },
  textDate: {
    fontFamily: "Poppins-Regular",
    color: COLORS.white,
  },
  textPrice: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.white,
    fontSize: 15,
  },
});
