import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import Facebook from "../../assets/img/facebook.png";
import Google from "../../assets/img/google.png";
import { useNavigation } from '@react-navigation/native';
import { ROUTES, COLORS } from "../../constants";
import  Button  from "./components/Button";
import  Input  from "./components/Input";

const Login = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia Sesión</Text>
      <View style={styles.inputContainer}>
        <Input placeholder={'E-mail'} />
        <Input placeholder={'Contraseña'} />
      </View>
      
      <Button
        name="Ingresa"
        backgroundColor={COLORS.primary}
        textColor={COLORS.white}
      />
      <Button
        name="Regístrate"
        borderWidth={1}
        borderColor={COLORS.grayLight}
        backgroundColor={COLORS.white}
        textColor={COLORS.gray}
      />

      <View style={styles.question}>
        <Text>O continúa con</Text>
      </View>

      <View style={styles.socialButtonsContainer}>
        <Pressable style={styles.googleButton}>
        <Image source={Google} style={{ width: 18, height: 18, marginLeft: 5, marginRight: 3 }} />
          <Text style={styles.socialButtonText}>Google</Text>
        </Pressable>
        <Pressable style={styles.facebookButton}>
          <Image source={Facebook} style={{ width: 18, height: 18 }} />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 16,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  facebookButton: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    width: 120,
    marginHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#C3C3C3",
    borderRadius: 10,
  },
  googleButton: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    width: 120,
    marginHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#C3C3C3",
    borderRadius: 10,
  },
  socialButtonText: {
    color: "#343434",
    fontSize: 15,
    marginLeft: 10,
  },
  question: {
    marginTop: 50,
    marginBottom: 10,
  },
});

