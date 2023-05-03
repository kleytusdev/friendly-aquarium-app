import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, ROUTES } from "../../../constants";
// Svgs
import { Ionicons } from "@expo/vector-icons";
import IconStar from "../../../assets/svgs/star.svg"
import IconLike from "../../../assets/svgs/like.svg"
import IconInfo from "../../../assets/svgs/info.svg"
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext';
import CartIcon from "./CartIcon";

const ProductScreen = ({ route }) => {

  const { name, price, sourceImage } = route.params.product;
  
  const navigation = useNavigation();

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME_TAB)}>
            <Ionicons name="arrow-back" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <View>
            <Text style={styles.navbarText}>Producto</Text>
          </View>
          <View>
            <CartIcon />
          </View>
        </View>
        <View style={styles.photoContainer}>
          <Image style={{ flex: 1, resizeMode: 'contain' }} source={sourceImage} />
        </View>
        <ScrollView style={{ backgroundColor: COLORS.background}}>
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.nameProduct}>{name}</Text>
              <TouchableOpacity style={styles.containerHeart}>
                <Ionicons name="heart" size={25} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                <IconStar color='#F99B2B' width={20} height={20}/>
                <Text style={styles.statsText}>4.8</Text>
              </View>
              <View style={{ flex: 4.7, flexDirection: 'row' }}>
                <Text style={styles.statsInfoText} >87 reseñas</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                <IconLike color={COLORS.secondary} width={20} height={20}/>
                <Text style={styles.statsText}>88%</Text>
              </View>
              <View style={{ flex: 4.7, flexDirection: 'row' }}>
                <Text style={styles.statsInfoText} >140 recomiendan este producto</Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.titleDescription}>Descripción</Text>
              <Text style={styles.infoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis elintub nobis, perspiciatis consequatur odio odit id fugit qui laborum veniam reprehenderit labore, doloremque vne voluptates!</Text>
            </View>
            <TouchableOpacity style={styles.interactionsContainer}>
              <View style={styles.row}>
                <IconInfo color={COLORS.secondary} width={20} height={20}/>
                <Text style={styles.interactionText}>Infórmate más sobre este producto</Text>
              </View>
              <View style={styles.row}>
                <Ionicons
                  style={{ marginRight: 10 }}
                  name="arrow-forward-sharp"
                  size={20}
                  color={COLORS.white}
                />          
              </View>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.price}>S/ {price}</Text>
                <Text style={styles.delivery}>Entrega 2-4 días</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => addToCart(sourceImage, name, price)}>
                <Text style={styles.buttonText}>
                  Agregar al carro
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.jetBlack,
    overflow: 'hidden'
  },
  navbar: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    backgroundColor: COLORS.jetBlack,
  },
  navbarText: {
    color: COLORS.white,
    fontSize: 17,
    fontFamily: "Poppins-Medium",
  },
  photoContainer: {
    height: 280,
    backgroundColor: COLORS.jetBlack,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'

  },
  infoContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  containerHeart:{
    paddingHorizontal: 8, 
    paddingVertical: 7, 
    borderRadius: 10, 
    backgroundColor: COLORS.jetBlack, 
    justifyContent: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15
  },
  nameProduct: {
    color: COLORS.white,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 3,
    gap: 10
  },
  statsText:{
    fontFamily: 'Poppins-Medium',
    color: COLORS.white
  },
  statsInfoText:{
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.gunmetal
  },
  descriptionContainer: {
    marginVertical: 10
  },
  titleDescription: {
    color: COLORS.white,
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    marginVertical: 10,
  },
  infoDescription: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gunmetal,
  },
  interactionsContainer:{
    color: COLORS.white,
    marginBottom: 25,
    marginTop: 10,
    borderColor: COLORS.gunmetal,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  interactionText:{
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: COLORS.white,
  },
  delivery: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: COLORS.gunmetal,
  },
  button: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.jetBlack,
    borderRadius: 15,
    paddingVertical: 15
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium'
  }
});
