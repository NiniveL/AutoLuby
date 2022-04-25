import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { TextInput } from "react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
  padding: 0 24px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 3px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.border_input};
  `};
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 52px;
  padding-left: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ButtonClear = styled.TouchableOpacity`
  margin-right: 7px;
`;

export const Button = styled(RectButton)`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 18px;
  margin-left: 7px;
`;
