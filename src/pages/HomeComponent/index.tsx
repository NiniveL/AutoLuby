import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Result } from "../../store/ducks/vehicles/types";
import * as VehiclesActions from "../../store/ducks/vehicles/actions";
import { ApplicationState } from "../../store";
import Frame from "../../components/Frame";
import { Container, Title, ContainerTitle } from "./styles";
import { Search } from "../../components/Search";

interface StateProps {
  result: Result;
}
interface DispatchProps {
  vehiclesRequest(): void;
}

type Props = StateProps & DispatchProps;

class HomeComponent extends Component<Props> {
  componentDidMount() {
    const { vehiclesRequest } = this.props;
    vehiclesRequest();
  }
  render() {
    const { result } = this.props;
    return (
      <Container>
        <ContainerTitle>
          <Title>Listagem geral de veículos</Title>
        </ContainerTitle>
        <View style={{ height: 30 }} />
        <Search />
        <View style={{ height: 10 }} />
        <ScrollView>
          {result?.vehicles?.map((item) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Frame data={item} />
              </View>
            );
          })}
        </ScrollView>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(VehiclesActions, dispatch);

const mapStateToProps = (state: ApplicationState) => ({
  result: state.vehicles.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
