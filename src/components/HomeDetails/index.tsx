import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { useNavigation } from "@react-navigation/native";
import { Container, Title, Label, Total } from "./styles";

interface Props {
  title: string;
  label: string;
  total: string;
  source: ImageSourcePropType;
}

const HomeDetails = ({ title, label, total, source }: Props) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <>
      <Container>
        <View style={{ paddingHorizontal: 10 }}>
          <Title>{title}</Title>
          <Label>{label}</Label>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Total>{total}</Total>
          </View>
        </View>
        <Image style={{ width: 118, height: 100 }} source={source} />
      </Container>
    </>
  );
};

export default HomeDetails;
