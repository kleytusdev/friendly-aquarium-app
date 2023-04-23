import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export async function prepare() {
  await SplashScreen.preventAutoHideAsync();
}

export async function hideSplashScreen(fontsLoaded) {
  if (fontsLoaded) {
    await SplashScreen.hideAsync();
  }
}

export function useFonts() {
  const [fontsLoaded] = Font.useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(() => {
    hideSplashScreen(fontsLoaded);
  }, [fontsLoaded]);

  return { onLayoutRootView, fontsLoaded };
}
