import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Alert
} from "react-native";
import Facebook from "../../assets/img/facebook.png";
import Google from "../../assets/img/google.png";
import { useNavigation } from '@react-navigation/native';
import { ROUTES, COLORS } from "../../constants";
import Button from "./components/Button";
import Input from "./components/Input";
import firebaseConfig from "./../../../firebase-config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  console.log({ email, password })
  
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Cuenta creada');
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
      Alert.alert(error.message)
    })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Inicio de sesión exitoso');
      const user = userCredential.user;
      console.log(user);
      navigation.navigate('Home')
    })
    .catch(error => {
      console.log(error);
      Alert.alert(error.message)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia Sesión</Text>
      <View style={styles.inputContainer}>
        <Input onChangeText={(text) => setEmail(text)} placeholder={'E-mail'} />
        <Input onChangeText={(text) => setPassword(text)} placeholder={'Contraseña'} />
      </View>
      
      <Button
        name="Ingresa"
        backgroundColor={COLORS.primary}
        textColor={COLORS.white}
        // onPress={handleSignIn}
        onPress={navigation.navigate('Home')}
      />
      <Button
        name="Regístrate"
        borderWidth={1}
        borderColor={COLORS.grayLight}
        backgroundColor={COLORS.white}
        textColor={COLORS.gray}
        onPress={handleCreateAccount}
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

