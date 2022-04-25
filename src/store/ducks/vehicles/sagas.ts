import { call, put, select } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { vehiclesSuccess, vehiclesFailure } from "./actions";
import { Result } from "./types";
import api from "../../../service/api";

export function* getVehicles() {
  try {
    const response: AxiosResponse<Result> = yield call(api.get, "/vehicles");
    yield put(vehiclesSuccess(response.data));
  } catch (err) {
    yield put(vehiclesFailure());
  }

  return true;
}
