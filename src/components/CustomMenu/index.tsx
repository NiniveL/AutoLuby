import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import theme from "../../global/styles/theme";

const CustomMenu = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const theme = useTheme();

  function hadleNavigateListCarro() {
    navigate("HomeComponent");
  }

  function hadleNavigateSuporte() {
    navigate("Suporte");
  }

  function hadleNavigateMeusDados() {
    navigate("MeusDados");
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerBottom}
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer)}
        >
          <Feather name="x" size={23} color={theme.colors.red} />
        </TouchableOpacity>

        <View style={styles.containerMenuForm}>
          <View style={styles.containerMenu}>
            <Text style={styles.containerMenuTitle}>Jóse Silvo</Text>
            <TouchableOpacity
              onPress={hadleNavigateMeusDados}
              style={styles.containerMenuBottom}
            >
              <Feather name="alert-circle" size={23} color="#191921" />
              <Text style={styles.containerMenuLabel}>EDITAR MEUS DADOS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={hadleNavigateListCarro}>
          <Text style={styles.containerMenuText}>Lista de Carros</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={hadleNavigateSuporte}>
          <Text style={styles.containerMenuText}>Funcionarios</Text>
        </TouchableOpacity>

        <Text style={styles.containerMenuText}>Sair</Text>
      </View>

      <View style={styles.footer}>
        {/* <Image style={styles.footerIcon} source={IconPay} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 380,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    flex: 1,
  },
  containerBottom: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingTop: 80,
    marginRight: 40,
  },
  containerMenuForm: {
    marginLeft: -20,
  },
  containerMenu: {
    backgroundColor: "#fff",
    width: 300,
    height: 80,
    marginTop: 60,
    borderTopRightRadius: 21,
    borderBottomRightRadius: 21,
    marginBottom: 60,
  },
  containerMenuTitle: {
    color: "#191921",
    fontSize: 26,
    marginLeft: 30,
    paddingTop: 10,
  },
  containerMenuLabel: {
    color: "#191921",
    fontSize: 12,
  },
  containerMenuText: {
    color: theme.colors.red,
    fontSize: 23,
    marginLeft: 30,
    marginBottom: 30,
  },
  footer: {},
  footerIcon: {
    width: 33,
    height: 40,
  },
  containerMenuBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    marginRight: 100,
  },
});

export default CustomMenu;
