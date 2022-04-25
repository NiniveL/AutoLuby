import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { authSuccess, authFailure } from "./actions";
import { Auth } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../service/api";
import { navigate } from "../../../navigation/rootNavigation";

export function* auth(authUser: any) {
  try {
    const response: AxiosResponse<Auth> = yield call(
      api.post,
      "/login",
      authUser.payload
    );
    yield AsyncStorage.setItem("token", response?.data?.token);
    navigate("MenuApp");
    yield put(authSuccess(response.data));
  } catch (err) {
    yield put(authFailure());
  }
  return true;
}
