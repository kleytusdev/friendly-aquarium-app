import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "./src/utilities/useFonts";
import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {

  const { onLayoutRootView, fontsLoaded } = useFonts();

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      {fontsLoaded ? <AuthNavigator /> : null}
    </NavigationContainer>
  );
}