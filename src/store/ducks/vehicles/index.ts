import { Reducer } from "redux";
import { Result, VehiclesState, VehiclesTypes } from "./types";

const INITIAL_STATE: VehiclesState = {
  data: {} as Result,
  loading: false,
  error: false,
};

const reducer: Reducer<VehiclesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VehiclesTypes.VEHICLES_REQUEST:
      return { ...state, loading: true };
    case VehiclesTypes.VEHICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case VehiclesTypes.VEHICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {} as Result,
      };
    default:
      return state;
  }
};

export default reducer;
