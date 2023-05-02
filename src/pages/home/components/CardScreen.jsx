import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../constants';

const CardScreen = ({ onPress, sourceImage, name, price, top, imageWidth, imageHeight }) => {
  

  const [animation] = useState(new Animated.Value(1));

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 0.9,
      useNativeDriver: true
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <View style={{flex: 0.7, alignItems: 'center'}}>
            <Image style={[styles.image, { top: top, width: imageWidth, height: imageHeight }]} source={sourceImage}/>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>S/ {price}</Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default CardScreen;


const styles = StyleSheet.create({
  card: {
    height: 160,
    backgroundColor: COLORS.jetBlack,
    borderRadius: 26,
    marginHorizontal: 1,
  },
  image:{
    position: 'absolute',
  },
  infoContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center'
  },
  price:{
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: COLORS.white
  }
})
