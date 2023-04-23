import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "./src/utilities/useFonts";
import AuthNavigator from './src/navigations/AuthNavigator';
import { View, Text } from 'react-native';


export default function App() {

  const { onLayoutRootView, fontsLoaded } = useFonts();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 32 }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}