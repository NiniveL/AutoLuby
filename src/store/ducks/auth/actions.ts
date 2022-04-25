import { action } from "typesafe-actions";
import { AuthTypes, Auth } from "./types";

export const authRequest = (userAuth: Auth) =>
  action(AuthTypes.AUTH_REQUEST, userAuth);

export const authSuccess = (auth: Auth) =>
  action(AuthTypes.AUTH_SUCCESS, { auth });

export const authFailure = () => action(AuthTypes.AUTH_FAILURE);
