import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { CartContext } from "./CartContext";
import { COLORS, ROUTES } from "../../../constants";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import IconStar from '../../../assets/svgs/star.svg'

const PurcharseScreen = () => {

  const navigation = useNavigation();
  const { products, clearCart } = useContext(CartContext);

  // Agrupar los productos por nombre y sumar sus cantidades
  const groupedProducts = products.reduce((acc, product) => {
    if (acc[product.name]) {
      acc[product.name].quantity += product.quantity;
    } else {
      acc[product.name] = { ...product };
    }
    return acc;
  }, {});

  const handleFinishPurchase = () => {
    // Eliminar todos los productos del carrito
    clearCart();
    // Redirigir al usuario al Home
    navigation.navigate(ROUTES.HOME);
  }

  const [isHeartFilled1, setIsHeartFilled1] = useState(false);
  const [isHeartFilled2, setIsHeartFilled2] = useState(false);

  const handleHeartPress = (index) => {
    if (index === 1) {
      setIsHeartFilled1(!isHeartFilled1);
    } else {
      setIsHeartFilled2(!isHeartFilled2);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={{ position: 'absolute', top: -40, left: '40%', width: 80, height: 80 }} source={require('./../../../assets/icons/Check.png')} />
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.title}>¡Gracias por su orden!</Text>
          <Text style={styles.message}>La confirmación del pedido ha sido enviada a su dirección de correo electrónico.</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.value}>
              S/
              {products
                .reduce((acc, product) => acc + product.totalPrice, 0)
                .toFixed(2)}
            </Text>
            <Text style={styles.label}>Cantidad total</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.value}>
              {products.reduce((acc, product) => acc + product.quantity, 0)}
            </Text>
            <Text style={styles.label}>Artículos</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.value}>18.03-22.03</Text>
            <Text style={styles.label}>Delivery</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', backgroundColor: '#B1EDCD', padding: 10, borderBottomEndRadius: 8, borderBottomStartRadius: 8, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='information-circle' color={'#fff'} size={20} />
          <Text style={{ fontFamily: 'Poppins-Regular', color: COLORS.jetBlack, fontSize: 14, marginLeft: 10 }}>Información sobre el delivery</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical:20 }}>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate(ROUTES.HOME); clearCart(); }}>
          <Text style={{ fontFamily: 'Poppins-Regular', color: COLORS.white, fontSize: 14 }}>Finalizar compra</Text>
        </TouchableOpacity>  
      </View>
      <View>
        <Text style={ styles.titleFavorites }>Guarda en tus favoritos</Text>
        <View style={{  flexDirection: 'row', padding: 10}}>
          <View style={{ flex: 1, backgroundColor: '#F2F2F2', flexDirection: 'row',  marginHorizontal: 5, borderRadius: 10, overflow: 'hidden'}}>
            <View style={{ flex: 1, margin: 10, paddingHorizontal: 5, paddingVertical: 10, borderRadius: 10, backgroundColor: '#E8E8E8', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={require('../../../assets/img/fish-betta.png')}/>
            </View>
            <View style={{ flex: 1, padding: 15, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handleHeartPress(1)}>
              <Ionicons
                name={isHeartFilled1 ? 'heart' : 'heart-outline'}
                color={isHeartFilled1 ? '#E46564' : 'black'}
                size={35}
              />
            </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1, backgroundColor: '#F2F2F2', flexDirection: 'row',  marginHorizontal: 5, borderRadius: 10, overflow: 'hidden'}}>
            <View style={{ flex: 1, margin: 10, paddingHorizontal: 5, paddingVertical: 10, borderRadius: 10, backgroundColor: '#E8E8E8', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={require('../../../assets/img/goldfish.png')}/>
            </View>
            <View style={{ flex: 1, padding: 15, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handleHeartPress(2)}>
              <Ionicons
                name={isHeartFilled2 ? 'heart' : 'heart-outline'}
                color={isHeartFilled2 ? '#E46564' : 'black'}
                size={35}
              />
            </TouchableOpacity>
            </View>
          </View>
          
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical:20 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontFamily: 'Poppins-Regular', color: COLORS.white, fontSize: 14 }}>Guardar las colecciones</Text>
        </TouchableOpacity>  
      </View>
      </View>
      <View>
        <Text style={ styles.titleQuestion }>¿Cuánto te gusta nuestra aplicación?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10, paddingVertical: 15, borderWidth: 0.2, borderRadius: 5, borderColor: COLORS.white  }}>
          <TouchableOpacity>
            <IconStar color='#fff' width={20} height={20} />
          </TouchableOpacity>
          <Text style={{ fontFamily: 'Poppins-Regular', color: COLORS.white, fontSize: 14, marginLeft: 10}}>Califica nuestra aplicación</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 30,
    paddingVertical: 35,
  },
  card: {
    backgroundColor: "#95E7BB",
    borderRadius: 8,
    paddingTop: 50,
    marginTop: 25,
  },
  title: {
    fontSize: 19,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    color: COLORS.jetBlack
  },
  message: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    marginBottom: 16,
    textAlign: "center",
    color: COLORS.jetBlack
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  col: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textAlign: "center",
    color: COLORS.jetBlack
  },
  value: {
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    color: COLORS.jetBlack
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.jetBlack,
    borderRadius: 10
  },
  titleFavorites: {
    lineHeight: 35,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white
  },
  titleQuestion: {
    lineHeight: 35,
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white
  }
});

export default PurcharseScreen;
