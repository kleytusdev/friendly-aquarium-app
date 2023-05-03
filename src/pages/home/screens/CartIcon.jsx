import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { CartContext } from "./CartContext";
import IconCart from "../../../assets/svgs/shopping-cart.svg";
import { ROUTES, COLORS } from "../../../constants";
import IconCircle from "../../../assets/svgs/circle.svg";
import { useNavigation } from '@react-navigation/native';

const CartIcon = () => {

  const navigation = useNavigation();

  const { count } = useContext(CartContext);

  return (
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PRODUCTQUEUE)}>
        <IconCart fill={COLORS.white} width={40} height={40} />

        {count > 0 && (
          <IconCircle
            style={{ position: "absolute", top: 7, left: 28 }}
            color={COLORS.secondary}
            width={10}
            height={10}
          />
        )}
      </TouchableOpacity>
  );
};

export default CartIcon;
