import { combineReducers } from "redux";
import RepairerReducer from "./repairer-reducer";
import ClientReducer from "./client-reducer";

export default combineReducers({
  repairer: RepairerReducer,
  client: ClientReducer
});
