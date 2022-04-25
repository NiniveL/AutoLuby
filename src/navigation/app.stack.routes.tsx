import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/HomeComponent";
import Login from "../pages/Login";
import HomeComponent from "../pages/HomeComponent";
import Header from "../components/Header";
import RoutesMenu from "./app.statackmenu";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="MenuApp" component={RoutesMenu} />
      <Screen
        options={{
          headerShown: true,
          header: () => <Header title="Seus Veículos" />,
        }}
        name="HomeComponent"
        component={HomeComponent}
      />
    </Navigator>
  );
}
