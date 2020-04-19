import { RECEIVE_MONSTERS } from "../actions/monster_actions";

const monstersReducer = (state ={}, action) => {
  Object.freeze(state);
  let newState = Object.assign( {}, state)
  switch (action.type) {
    case RECEIVE_MONSTERS:
      action.monsters.forEach(monster => {;
        newState[monster.index] = monster
      })
      return newState;
    default:
      return state;
    }
}

export default monstersReducer;