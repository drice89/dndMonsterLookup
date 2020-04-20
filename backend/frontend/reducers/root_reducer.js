import { combineReducers } from "redux";
import monstersReducer from "./monsters_reducer";
import monsterReducer from "./monster_reducer"

const rootReducer = combineReducers({
  monsters: monstersReducer,
  monster: monsterReducer
});

export default rootReducer;