import React, { useState } from "react";
import Button from "../../components/Button";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import theme from "../../global/styles/theme";
import {
  Container,
  Footer,
  BtnText,
  ContainerView,
  ContainerLogo,
  ContainerHeaderTitle,
  ContainerTitle,
  Title,
  Label,
} from "./styles";
import Input from "../../components/Input";
import * as Yup from "yup";

/** Internal Imports */
import { useDispatch } from "react-redux";

/** REDUX */
import * as AuthActions from "../../store/ducks/auth/actions";
import { navigate } from "../../navigation/rootNavigation";
/** REDUX END */

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);

  async function handleSignIn() {
    try {
      setIsLogging(true);
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("A senha é obrigatória"),
      });
      await schema.validate({ email, password });
      dispatch(
        AuthActions.authRequest({
          email,
          password,
        })
      );
      setIsLogging(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
        setIsLogging(false);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        );
        setIsLogging(false);
      }
    }
  }

  return (
    <>
      <Container>
        <ContainerLogo>
          <Image source={require("../../../assets/logo.png")} />
          <ContainerHeaderTitle>AutoLuby</ContainerHeaderTitle>
        </ContainerLogo>
        <ContainerTitle>
          <Title>Bem-vindo à AutoLuby</Title>
          <Label>Faça o login para acessar sua conta.</Label>
        </ContainerTitle>
        <ContainerView>
          <BtnText>Endereço de email</BtnText>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="@mail.com"
            iconName=""
          />
          <BtnText>Senha</BtnText>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            iconName=""
          />
          <SafeAreaView style={{ height: 20 }} />
          <Button
            iconName=""
            title="Entrar"
            textcolor={theme.colors.primary}
            color={theme.colors.red}
            onPress={handleSignIn}
            enabled={!isLogging}
            loading={isLogging}
          />
        </ContainerView>
      </Container>
    </>
  );
}
