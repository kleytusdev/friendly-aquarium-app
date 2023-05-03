import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "./src/utilities/useFonts";
import AuthNavigator from './src/navigations/AuthNavigator';
import { CartProvider } from './src/pages/home/screens/CartContext';

export default function App() {

  const { onLayoutRootView, fontsLoaded } = useFonts();

  return (
    <CartProvider>
      <NavigationContainer onLayout={onLayoutRootView}>
        {fontsLoaded ? <AuthNavigator /> : null}
      </NavigationContainer>
    </CartProvider>
  );
}