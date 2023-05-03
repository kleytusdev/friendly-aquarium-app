import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const CreditCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={{ marginBottom: 60}}>
          <View style={styles.row}>
            <Image
                source={require("../../../assets/img/mastercard.png")}
                style={{ width: 45, height: 45 }}
            />
            <Text style={styles.title}>Tarjeta de Crédito</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View>
            <Text style={styles.numberCard}>**** ******** 12345</Text>
            <Text style={styles.nameHolder}>Leon Sandoy</Text>
          </View>
          <Text style={styles.date}>04/28</Text>
        </View>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.jetBlack,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 5,
    paddingBottom: 20,
    marginVertical: 20,
  },
  textContainer: {
    marginVertical: 15,
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: COLORS.white,
    fontSize: 15,
    marginRight: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  numberCard: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.white,
    fontSize: 15,
  },
  nameHolder: {
    fontFamily: "Poppins-Light",
    color: COLORS.white,
    fontSize: 13,
  },
  date: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.white,
    fontSize: 15,
  }
});
