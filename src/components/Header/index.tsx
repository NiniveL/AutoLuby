import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { useNavigation } from "@react-navigation/native";
import { Container, ContainerTitle } from "./styles";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <>
      <Container>
        <TouchableOpacity onPress={navigation.goBack}>
          <Feather name="chevron-left" size={30} color={theme.colors.text} />
        </TouchableOpacity>
        <ContainerTitle>{title}</ContainerTitle>
        <TouchableOpacity onPress={navigation.goBack}>
          <Feather name="log-in" size={30} color={theme.colors.text} />
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default Header;
