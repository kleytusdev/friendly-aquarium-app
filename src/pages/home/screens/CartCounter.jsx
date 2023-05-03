import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { CartContext } from "./CartContext";
import { COLORS } from "../../../constants";
import IconCircle from "../../../assets/svgs/circle.svg"

const CartCounter = () => {
  const { products, removeFromCart } = useContext(CartContext);

  return (
    <View style={{ gap: 20 }}>
      {products.map((product) => (
        <View style={styles.card} key={product.name}>
          <Image
            style={{ width: 80, height: 80 }}
            source={product.sourceImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textName}>{product.name}</Text>
            <Text style={styles.textPrice}>S/ {product.totalPrice.toFixed(2)}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.textQuantity}>{product.quantity}</Text>
          </View>
          <View style={styles.interactionContainer}>
            <TouchableOpacity
              style={styles.deleteIcon}
              title="Eliminar"
              onPress={() => removeFromCart(product.id)}
            >
              <Text style={{ fontFamily: 'Poppins-ExtraBold', color: COLORS.jetBlack }}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CartCounter;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.jetBlack,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 5,
  },
  quantityContainer: {
    flex: 0.3,
    justifyContent: "center",
  },
  interactionContainer: {
    flex: 0.3,
    justifyContent: "center",
  },
  textName: {
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold'
  },
  textPrice: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular'
  },
  textQuantity: {
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold'
  },
  deleteIcon: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
  }
});
