import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    NunitoBold: require("../assets/fonts/Nunito/Nunito-Bold.ttf"),
    NunitoSemiBold: require("../assets/fonts/Nunito/Nunito-SemiBold.ttf"),
    NunitoMedium: require("../assets/fonts/Nunito/Nunito-Medium.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // We only want to show our homepage if the fonts have loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 195,
        },
        headerShadowVisible: false,
        headerTintColor: "#444",
      }}
      onLayout={onLayoutRootView}
    />
  );
};

export default Layout;
