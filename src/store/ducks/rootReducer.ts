import { combineReducers } from "redux";

import auth from "./auth";
import vehicles from "./vehicles";

export default combineReducers({
  auth,
  vehicles,
});
