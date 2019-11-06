import { combineReducers } from "redux";

import app from "./app/reducer";
import offer from "./offer/reducer";

const rootReducer = combineReducers({
  app,
  offer
});

export default rootReducer;
