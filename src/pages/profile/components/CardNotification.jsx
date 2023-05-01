import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../constants";
import MiniStat from "./MiniStat";
import NewNotification from "./NewNotification";

const CardNotification = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <View style={{ flexDirection: "column" }}>
            <Text style={styles.title}>Notificaciones</Text>
            <MiniStat name={"2 NUEVOS"} backgroundColor={COLORS.lightSkyBlue} styleText={{color: COLORS.primary}} />
        </View>
        </View>
        <NewNotification
          subject={"¡Su pedido está listo para ser enviado a su hogar! ¡Qué emoción!"}
          date={"Ayer"}
          imageSource={require("../../../assets/img/goldfish.png")}
        />
        <NewNotification
          subject={"¡Su pedido está listo para ser enviado a su hogar! ¡Qué emoción!"}
          date={"Hace 5 dias"}
          imageSource={require("../../../assets/img/fish-blue.jpg")}
        />
        <NewNotification
          subject={"¡Su pedido está listo para ser enviado a su hogar! ¡Qué emoción!"}
          date={"Hace 1 mes"}
          imageSource={require("../../../assets/img/fish-betta.png")}
        />
      </View>
    </>
  );
};

export default CardNotification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.jetBlack,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.white,
    fontSize: 20,
    marginRight: 5,
  },
  subtitle: {
    color: COLORS.lightGray,
    fontSize: 14,
  },
});
