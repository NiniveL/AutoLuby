import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import HomeDetails from "../../components/HomeDetails";
import theme from "../../global/styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ImageCarro1 from "../../../assets/image1.png";
import { Container, ContainerView } from "./style";

export default function Home() {
  // useEffect(async () => {
  //   const data = await AsyncStorage.getItem("userdata");
  //   console.log("data:", data);
  // }, []);

  return (
    <Container>
      <ContainerView>
        <HomeDetails
          title="Veículos reservados e vendidos"
          label="Veículos reservados e vendidos por você"
          total="147 Veículos"
          source={ImageCarro1}
        />
      </ContainerView>
    </Container>
  );
}
