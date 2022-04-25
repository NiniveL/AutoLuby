import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.View.attrs({
  marginTop: 40,
  marginVertical: 10,
  left: 10,
})`
  justify-content: flex-start;
  align-items: center;
  max-width: 67%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.poppins_semiBold};
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.color_input};
  font-family: ${({ theme }) => theme.fonts.poppins_semiBold};
`;

export const ContainerLogo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerHeaderTitle = styled.Text`
  font-size: ${RFValue(38)}px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.poppins_semiBold};
  left: 10px;
`;

export const ContainerView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const BtnRow = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BtnText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.poppins_semiBold};
`;
