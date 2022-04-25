import * as React from "react";
import { Button, View, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";

// import CustomMenu from "../components/CustomMenu";
import Home from "../pages/Home";
import CustomMenu from "../components/CustomMenu";

export default function RoutesMenu() {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: "90%",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: "#191921",
        padding: 23,
        paddingTop: 44,
      }}
      drawerContentOptions={{
        inactiveBackgroundColor: "#191921",
        activeBackgroundColor: "#191921",
        inactiveTintColor: "#fff",
        activeTintColor: "#fff",
        labelStyle: {
          fontFamily: "muli-bold",
          fontSize: 23,
          marginLeft: 30,
          marginBottom: 30,
        },
      }}
      initialRouteName="Home"
      drawerContent={() => <CustomMenu />}
    >
      <Drawer.Screen
        options={{
          drawerLabel: "Home",
          headerTitleStyle: {
            color: "#ffff",
          },
        }}
        name="Home"
        component={Home}
      />
    </Drawer.Navigator>
  );
}
