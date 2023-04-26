import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import CardNotification from "./components/CardNotification";
import MiniStat from "./components/MiniStat";
import CreditCard from "./components/CreditCard";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require("../../assets/img/profile.jpg")}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>Aldo</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>Lima, Perú</Text>
            <MiniStat name={"PRO"} backgroundColor={COLORS.lightSkyBlue} styleText={{color: COLORS.primary}} />
          </View>
        </View>
        <Ionicons
          style={styles.icon}
          name="settings"
          size={20}
          color={COLORS.primary}
        />
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>30</Text>
          <Text style={styles.statLabel}>Compras</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>7</Text>
          <Text style={styles.statLabel}>Pedidos</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>110</Text>
          <Text style={styles.statLabel}>Favoritos</Text>
        </View>
      </View>
      <CardNotification />
      <CreditCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginLeft: 15
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.primary,
    fontSize: 20,
  },
  location: {
    fontFamily: "Poppins-Regular",
    color: COLORS.gray,
    marginRight: 10
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  stats: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    color: COLORS.lightSkyBlue,
    fontWeight: "bold",
    fontSize: 18,
  },
  statLabel: {
    color: COLORS.extraGray,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  
});

export default Profile;
