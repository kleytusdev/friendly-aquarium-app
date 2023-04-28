import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../constants";
import IconShoppingCart from "../../../assets/svgs/shopping-cart.svg";
import MiniStat from "../../profile/components/MiniStat";

const CardPurchaseStatus = ({ image, product, date, price, status }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          {image}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.textProduct}>{product}</Text>
          <Text style={styles.textDate}>{date}</Text>
          <Text style={styles.textPrice}>S/ {price}</Text>
          <MiniStat name={status} backgroundColor={COLORS.primary} styleText={{color: '#fff'}} />
        </View>
        <View style={styles.statusContainer}>
          <IconShoppingCart fill="#fff" width={40} height={40} />
        </View>
      </View>
    </>
  );
};

export default CardPurchaseStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
    marginVertical: 10,
    marginHorizontal: 5
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
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  textProduct: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 17,
  },
  textDate: {
    fontFamily: "Poppins-Regular",
  },
  textPrice: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
  },
});
