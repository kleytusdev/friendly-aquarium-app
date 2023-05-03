import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
import CardNotification from "./components/CardNotification";
import MiniStat from "./components/MiniStat";
import CreditCard from "./components/CreditCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import firebaseConfig from "./../../../firebase-config";
import IconLogout from "../../assets/svgs/logout.svg"

const Profile = () => {

  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sesión cerrada');
        navigation.navigate('Login')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity onPress={handleSignOut}>
            <IconLogout style={{ marginRight: 15 }} color={COLORS.secondary} width={20} height={20} />
          </TouchableOpacity>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: COLORS.jetBlack,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
    marginLeft: 15,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white,
    fontSize: 20,
  },
  location: {
    fontFamily: "Poppins-Regular",
    color: COLORS.extraGray,
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
    backgroundColor: COLORS.jetBlack,
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
    color: COLORS.secondary,
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
