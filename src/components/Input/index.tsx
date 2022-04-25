import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Container, InputText } from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export default function Input({ iconName, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <InputText {...rest} />
      <Feather name={iconName} size={20} color={theme.colors.shape} />
    </Container>
  );
}
