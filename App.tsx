import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import "./src/config/ReactotronConfig";
import theme from "./src/global/styles/theme";
import { Routes } from "./src/navigation";
import store from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light: require("./assets/fonts/Poppins-Light.ttf"),
    Poppins_400Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_700Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    Poppins_500Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_800ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    Poppins_SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    );
  }
}
