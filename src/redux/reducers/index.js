import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import molecularReducer from "./molecularReducer";

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
  molecularReducer,
});
