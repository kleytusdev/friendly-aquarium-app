import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Fish from '../../assets/img/bg-fish-removebg.png'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ROUTES, COLORS } from '../../constants';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friendly Aquarium</Text>
      <View style={styles.containerImage}>
        <Image source={Fish} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>Un amor unilateral por los peces</Text>
      <Text style={styles.text}>Estamos muy emocionados de compartir nuestra pasión por los peces contigo. ¡Explora nuestra selección y descubre a tus nuevos compañeros acuáticos!</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate(ROUTES.LOGIN)}>
        <Text style={styles.buttonText}>Empezar</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    letterSpacing: 4,
    marginBottom: 16,
    color: COLORS.white
  },
  containerImage: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginVertical: 30,
    backgroundColor: COLORS.white,
    borderRadius: 45
  },
  image: {
    width: 200,
    height: 200,
    padding: 50,
  },
  subtitle: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 8,
    marginHorizontal: 60,
    color: COLORS.white
  },
  text: {
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 32,
    marginHorizontal: 45,
    color: COLORS.gunmetal
  },
  button: {
    backgroundColor: COLORS.jetBlack,
    padding: 16,
    borderRadius: 10,
    width: 280,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    color: "white",
    fontSize: 14,
  },
});
