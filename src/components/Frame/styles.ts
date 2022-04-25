import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  TextInput,
  TextProps,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

interface StatusProps {
  color: string;
}

export const Container = styled.View`
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.backgroud_input};
  width: 355px;
  height: 100px;
  border-radius: 3px;
  margin: 4px;
`;

export const ContainerHeader = styled.View.attrs({
  padding: 5,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerStatus = styled(View)<StatusProps>`
  width: 80px;
  height: 18px;
  margin: 4px;
  align-items: center;
  background-color: ${({ color }) => color};
  opacity: 0.4;
`;

export const ContainerFooter = styled.View.attrs({
  paddingHorizontal: 5,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border_input};
  width: 314px;
  height: 30px;
  left: 5px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TitleRed = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TitleStatus = styled(Text)<StatusProps>`
  color: ${({ color }) => color};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.colors.color_input};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
