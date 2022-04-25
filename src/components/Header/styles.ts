import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  TextInput,
  TextProps,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export const Container = styled.View.attrs({
  padding: 23,
  paddingTop: 44,
  height: 99,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fff",
})``;

export const ContainerTitle = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_semiBold};
`;
