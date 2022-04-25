import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { useAuth } from '../hooks/auth';

import { useSelector, useDispatch } from "react-redux";

import { AuthRoutes } from "./auth.routes";
import { AppStackRoutes } from "./app.stack.routes";
import { navigationRef } from "./rootNavigation";
import { ApplicationState } from "../store";

export function Routes() {
  const authentication = useSelector(
    (state: ApplicationState) => state.auth.data
  );
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStackRoutes />
    </NavigationContainer>
  );
}
