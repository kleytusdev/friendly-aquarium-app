import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants";

const imagenes = [
  "https://i.imgur.com/JOKsNeT.jpeg",
  "https://i.imgur.com/pN14qda.jpeg",
  "https://i.imgur.com/diRjABu.jpeg",
];

const width = Dimensions.get("window").width;

const ANCHO_CONTENEDOR = width * 0.72;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;

const Slider = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
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

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, 10, 0],
          });

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
                  transform: [{ rotate }, { translateY: scrollY }, { scale }],
                }}
              >
                <Image source={{ uri: item }} style={styles.posterImage} />
                <TouchableOpacity style={styles.heart}>
                  <Ionicons name="heart" size={20} color={COLORS.extraGray} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>¡Adquierelo!</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
