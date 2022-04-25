/**
 * Action types
 */

export enum VehiclesTypes {
  VEHICLES_REQUEST = "@section/VEHICLES_REQUEST",
  VEHICLES_SUCCESS = "@section/VEHICLES_SUCCESS",
  VEHICLES_FAILURE = "@section/VEHICLES_FAILURE",
}

/**
 * Data types
 */

export interface Result {
  perPage: number;
  currentPage: number;
  totalRecords: number;
  vehicles: Vehicles[];
}

export interface Vehicles {
  brand: string;
  model: string;
  yer: number;
  km: number;
  color: string;
  status: string;
  chassi: string;
  value: number;
}

export interface VehiclesState {
  readonly data: Result;
  readonly loading: boolean;
  readonly error: boolean;
}
