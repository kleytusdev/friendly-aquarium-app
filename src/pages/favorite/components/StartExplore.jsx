import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ROUTES, COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import IconBetta from "../../../assets/svgs/betta-fish.svg"
import { useNavigation } from '@react-navigation/native';

const StartExplore = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME_TAB)}>
      <View style={styles.button}>
        <View style={styles.circle}>
          <IconBetta fill='#3B3947' width={35} height={35} />
        </View>
        <Text style={styles.buttonText}>Únete ahora</Text>
        <Ionicons
          name="arrow-forward-sharp"
          size={20}
          color={COLORS.extraGray}
        />
      </View>
    </TouchableOpacity>
  );
};

export default StartExplore;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primaryLight,
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 6,
    justifyContent: "space-between",
    marginTop: 10,
    overflow: "hidden",
  },
  circle: {
    padding: 10,
    borderRadius: 70,
    backgroundColor: "white",
  },
  square: {
    padding: 20,
    backgroundColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontFamily: 'Poppins-Regular'
  },
});
