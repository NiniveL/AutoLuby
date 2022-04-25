import { action } from "typesafe-actions";
import { VehiclesTypes, Result } from "./types";

export const vehiclesRequest = () => action(VehiclesTypes.VEHICLES_REQUEST);

export const vehiclesSuccess = (vehicles: Result) =>
  action(VehiclesTypes.VEHICLES_SUCCESS, vehicles);

export const vehiclesFailure = () => action(VehiclesTypes.VEHICLES_FAILURE);
