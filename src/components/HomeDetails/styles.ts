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

export const Container = styled.View`
  width: 337px;
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.poppins_semiBold};
  max-width: 200px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.poppins_semiBold};
`;

export const Total = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
