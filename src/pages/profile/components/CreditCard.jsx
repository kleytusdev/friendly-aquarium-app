import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const CreditCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Credit Card</Text>
        <Text style={styles.numberCard}>**** ******** 12345</Text>
        <View style={styles.row}>
          <Text style={styles.nameHolder}>Aldo de la Cruz Gallegos</Text>
          <Image
            source={require("../../../assets/img/mastercard.png")}
            style={{ width: 45, height: 45 }}
          />
        </View>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.jetBlack,
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginVertical: 20,
  },
  textContainer: {
    marginVertical: 15,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.white,
    fontSize: 15,
    marginRight: 5,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  numberCard: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.white,
    fontSize: 18,
  },
  nameHolder: {
    fontFamily: "Poppins-Regular",
    color: COLORS.white,
    fontSize: 13,
  },
});
