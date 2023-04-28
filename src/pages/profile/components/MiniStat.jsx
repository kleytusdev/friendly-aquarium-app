import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const MiniStat = ({ name, backgroundColor, styleText }) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.container} backgroundColor={backgroundColor}>
        <Text style={[styles.text, styleText]}>{name}</Text>
      </View>
    </View>
  );
};

export default MiniStat;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 1
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 8,
    justifyContent: "center",
  },
});
