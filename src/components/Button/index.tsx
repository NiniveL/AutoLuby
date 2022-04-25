import React from "react";
import { useTheme } from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
  textcolor?: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export default function Button({
  title,
  color,
  textcolor,
  iconName,
  enabled = true,
  loading = false,
  light = false,
  onPress,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      onPress={onPress}
      enabled={enabled}
      color={color ? color : theme.colors.secondary}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={20}
        color={theme.colors.secondary}
      />
      {loading ? (
        <ActivityIndicator color={theme.colors.primary} />
      ) : (
        <Title textcolor={textcolor ? textcolor : theme.colors.primary}>
          {title}
        </Title>
      )}
    </Container>
  );
}
