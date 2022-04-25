import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "./auth/types";
import { auth } from "./auth/sagas";

import { VehiclesTypes } from "./vehicles/types";
import { getVehicles } from "./vehicles/sagas";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, auth),
    takeLatest(VehiclesTypes.VEHICLES_REQUEST, getVehicles),
  ]);
}
