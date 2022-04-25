import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput, TextProps, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.backgroud_input};
  border-color: ${({ theme }) => theme.colors.border_input};
  width: 330px;
  padding: 15px;
  border-radius: 3px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.colors.color_input};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
