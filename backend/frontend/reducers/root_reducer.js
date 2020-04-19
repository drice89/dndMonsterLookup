import { combineReducers } from "redux";
import monstersReducer from "./monster_reducer";

const rootReducer = combineReducers({
  monsters: monstersReducer
});

export default rootReducer;