import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";
import { COLORS } from "../../constants";
import Button from "./components/Button";
import Input from "./components/Input";
import firebaseConfig from "./../../../firebase-config";
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import IconBettaGradient from '../../assets/svgs/betta-fish-gradient.svg'
import * as yup from 'yup';
import { Formik } from 'formik';

const Register = () => {

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
      navigation.navigate('Home')
    })
    .catch(error => {
      console.log(error);
      Alert.alert(error.message)
    })
  }

  return (
    <View style={styles.container}>
      <IconBettaGradient style width={140} height={140} />
      <Text style={styles.title}>Crear una cuenta</Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          age: '',
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email('Ingresa un email válido').required('Ingresa tu email'),
          password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Ingresa tu contraseña'),
          name: yup.string().required('Ingresa tu nombre'),
          age: yup.number().typeError('Ingresa un número').positive('Ingresa un número positivo').integer('Ingresa un número entero').required('Ingresa tu edad'),        })}
        onSubmit={handleCreateAccount}
      >
        {({ handleChange, handleBlur, values, errors }) => (
          <View style={styles.inputContainer}>
            <Input
              onChangeText={(text) => setEmail(text)}
              onBlur={handleBlur('email')}
              placeholder={'E-mail'}
              value={values.email}
            />

            <Input
              onChangeText={(text) => setPassword(text)}
              onBlur={handleBlur('password')}
              placeholder={'Contraseña'}
              value={values.password}
              secureTextEntry={true}
            />

            <Input
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder={'Nombre'}
              value={values.name}
            />
            {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}

            <Input
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              placeholder={'Edad'}
              value={values.age}
            />
            {errors.age && <Text style={{ color: 'red' }}>{errors.age}</Text>}
          </View>
        )}
      </Formik>

      <Button
        name="Regístrate"
        borderWidth={1}
        backgroundColor={COLORS.white}
        textColor={COLORS.jetBlack}
        onPress={handleCreateAccount}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginVertical: 30,
    color: COLORS.white,
    alignItems: 'flex-start'
  },
  inputContainer: {
    marginBottom: 16,
  },

});

