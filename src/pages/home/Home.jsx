import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import CategoryNavigator from "./navigations/CategoryNavigator";
import FishScreen from "./screens/FishScreen";

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={styles.navbar}>
          <View style={styles.left}>
            <Ionicons name="options" size={20} color={COLORS.white} />
          </View>
          <View style={styles.center}>
            <Text style={styles.navbarText}>Home</Text>
          </View>
          <View style={styles.right}>
            <Ionicons name="search" size={20} color={COLORS.white} />
          </View>
        </View>

        <View style={styles.containerSubTitle}>
          <Text style={styles.greeting}>¡Hola Aldo!</Text>
          <Text style={styles.subtitle}>Descubre el mundo acuático</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.searchContainer}>
              <Ionicons
                style={{ marginHorizontal: 13 }}
                name="search"
                size={20}
                color={COLORS.gray}
              />
              <TextInput style={styles.input} placeholder="Busca tu producto" />
            </View>
            <TouchableOpacity style={styles.circle}>
              <Ionicons name="options" size={20} color={COLORS.extraGray} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.column1}>
            <Text style={styles.title}>Conoce nuestros productos</Text>
            <Text style={styles.subtitleCard}>
              Explora nuestro mar de opciones para tus amigos acuáticos
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Explorar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column2}>
            <View style={styles.image}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../../assets/pngs/welcome-betta.png")}
              />
            </View>
          </View>
        </View>
        <Text style={{ marginLeft: 10, fontFamily: "Poppins-Medium", fontSize: 18, color: COLORS.white }}>
          Categoría
        </Text>
        <CategoryNavigator />
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 25,
  },
  navbar: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarText: {
    color: COLORS.white,
    fontSize: 17,
    fontFamily: "Poppins-Medium",
  },
  containerSubTitle: {
    marginTop: 10,
  },
  greeting: {
    fontFamily: "Poppins-Medium",
    fontSize: 24,
    color: COLORS.white,
  },
  subtitle: {
    fontFamily: "Poppins-Light",
    fontSize: 15,
    color: COLORS.gunmetal,
  },
  bottomContainer: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
  },
  input: {
    backgroundColor: COLORS.white,
    height: 50,
    borderRadius: 25,
    flex: 1,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.jetBlack,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.jetBlack,
    borderRadius: 30,
    padding: 20,
    marginVertical: 20,
    elevation: 2,
  },
  column1: {
    flex: 1,
  },
  column2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    marginBottom: 5,
    color: COLORS.white,
  },
  subtitleCard: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: COLORS.extraGray,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.secondary,
    marginVertical: 10,
    width: 90,
    height: 23,
    borderRadius: 20,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: COLORS.primary,
    alignSelf: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});
