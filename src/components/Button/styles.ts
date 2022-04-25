import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextProps, TouchableOpacity } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface ButtonProps extends RectButtonProps {
  color: string;
}

interface Text extends TextProps {
  textcolor: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 330px;
  flex-direction: row;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  border-radius: 3px;
`;

export const Title = styled.Text<Text>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ textcolor }) => textcolor};
`;
