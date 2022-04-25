import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  Container,
  Title,
  TitleStatus,
  TitleRed,
  ContainerHeader,
  Label,
  ContainerFooter,
  ContainerStatus,
} from "./styles";

interface Props {
  data: {
    brand: string;
    model: string;
    yer: number;
    km: number;
    color: string;
    status: string;
    chassi: string;
    value: number;
  };
}

export default function Frame({ data, ...rest }: Props) {
  const theme = useTheme();

  switch (theme) {
    case "Vendido":
      return (
        <ContainerStatus>
          <TitleStatus>{data.status}</TitleStatus>
        </ContainerStatus>
      );
    case "Reservado":
  }
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Vendido":
        return (
          <ContainerStatus color={theme.colors.red}>
            <TitleStatus color={theme.colors.red}>{data.status}</TitleStatus>
          </ContainerStatus>
        );
      case "Reservado":
        return (
          <ContainerStatus color={theme.colors.yellow}>
            <TitleStatus color={theme.colors.yellow}>{data.status}</TitleStatus>
          </ContainerStatus>
        );
      case "Disponível":
        return (
          <ContainerStatus color={theme.colors.success}>
            <TitleStatus color={theme.colors.success}>
              {data.status}
            </TitleStatus>
          </ContainerStatus>
        );
      default:
        return "#ffff";
    }
  };

  return (
    <Container {...rest}>
      {getStatusColor(data.status)}
      <ContainerHeader>
        <Title>{data.brand}</Title>
        <TitleRed>{data.value}</TitleRed>
      </ContainerHeader>
      <ContainerFooter>
        <Label>{data.color}</Label>
        <Label>{data.km}</Label>
        <Label>{data.chassi}</Label>
      </ContainerFooter>
    </Container>
  );
}
