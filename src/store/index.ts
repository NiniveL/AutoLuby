import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { AuthState } from "./ducks/auth/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import { VehiclesState } from "./ducks/vehicles/types";

export interface ApplicationState {
  auth: AuthState;
  vehicles: VehiclesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
