import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

const images = [
    require('../../../assets/img/favorites/favorite1.jpg'),
    require('../../../assets/img/favorites/favorite2.jpg'),
    require('../../../assets/img/favorites/favorite3.jpg'),
    require('../../../assets/img/favorites/favorite4.jpg'),
    require('../../../assets/img/favorites/favorite5.jpg'),
];

const width = Dimensions.get("window").width;

const ANCHO_CONTENEDOR = width * 0.72;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;

const Slider = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [iconColors, setIconColors] = useState(
    images.reduce((acc, _, index) => {
      acc[index] = COLORS.extraGray;
      return acc;
    }, {})
  );

  const handleIconPress = (index) => {
    setIconColors((prevColors) => {
      const newColors = { ...prevColors }

      newColors[index] = prevColors[index] === "#c63637" ? COLORS.extraGray : "#c63637"

      return newColors;
    });
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 2) * ANCHO_CONTENEDOR,
          ];


          const rotate = scrollX.interpolate({
            inputRange,
            outputRange: ["-15deg", "0deg", "15deg"],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <Animated.View
                style={{
                  marginHorizontal: -5,
                  transform: [{ rotate }, { scale }],
                }}
              >
                <Image source={ item } style={styles.posterImage} />
                <TouchableOpacity
                  style={styles.heart}
                  onPress={() => handleIconPress(index)}
                >
                  <Ionicons name="heart" size={20} color={iconColors[index]} />
                </TouchableOpacity>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    backgroundColor: COLORS.background,
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 55,
  },
  heart: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "5%",
    left: "5%",
  },
  button: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "80%",
    left: "35%",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.white,
  },
});
