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

const imagenes = [
  "https://cdn.discordapp.com/attachments/920362745231192114/1101306081218670662/pexels-francesco-ungaro-3301910.jpg",
  "https://cdn.discordapp.com/attachments/920362745231192114/1101306081734557746/pexels-ivan-babydov-7787761.jpg",
  "https://cdn.discordapp.com/attachments/920362745231192114/1101306082497933352/pexels-laura-paredis-13093376.jpg",
  "https://cdn.discordapp.com/attachments/920362745231192114/1101306082950905927/pexels-los-muertos-crew-8837890.jpg",
  "https://cdn.discordapp.com/attachments/920362745231192114/1101306083529732136/pexels-taryn-elliott-5546939.jpg",
];

const width = Dimensions.get("window").width;

const ANCHO_CONTENEDOR = width * 0.72;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;

const Slider = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [iconColors, setIconColors] = useState(
    imagenes.reduce((acc, _, index) => {
      acc[index] = COLORS.extraGray;
      return acc;
    }, {})
  );

  const handleIconPress = (index) => {
    setIconColors((prevColors) => {
      const newColors = { ...prevColors };
      if (prevColors[index] === "#c63637") {
        newColors[index] = COLORS.extraGray;
      } else {
        newColors[index] = "#c63637";
      }
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
        data={imagenes}
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
                <Image source={{ uri: item }} style={styles.posterImage} />
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
    backgroundColor: COLORS.white,
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
