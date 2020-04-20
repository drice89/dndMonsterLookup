import { RECEIVE_MONSTER } from "../actions/monster_actions";

const monsterReducer = (state ={}, action) => {
  Object.freeze(state);
  let newState = Object.assign( {}, state)
  switch (action.type) {
    case RECEIVE_MONSTER:
      newState = action.monster;
      return newState;
    default:
      return state;
    }
}

export default monsterReducer;