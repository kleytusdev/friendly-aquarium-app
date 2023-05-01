import React from "react";
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
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import IconBettaGradient from '../../assets/svgs/betta-fish-gradient.svg'
import { getFirestore, doc } from "firebase/firestore";
import * as yup from 'yup';
import { Formik } from 'formik';
import { useIsFocused } from '@react-navigation/native';

const Register = () => {

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      const db = getFirestore(app);

      // Agrega los datos adicionales del usuario a Firestore
      await doc(db, 'users', user.uid).set({
        name: values.name,
        age: values.age,
      });
      console.log('Cuenta creada');
      console.log(user);
    } catch (error) {
      console.log(error);
      Alert.alert('Campos incorrectos');
    }
  };

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
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder={'E-mail'}
              value={values.email}
            />
            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder={'Contraseña'}
              value={values.password}
            />
            {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

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

