import * as DndApiUtil from "../util/dnd_api_util"; 

export const RECEIVE_MONSTERS = "RECEIVE_MONSTERS"

export const receiveMonsters = (monsters) => {
  return {
    type: RECEIVE_MONSTERS,
    monsters: monsters.results
  }
};

export const fetchAllMonsters = () => dispatch => {
  return DndApiUtil.getMonsters()
    .then(monsters => {
      dispatch(receiveMonsters(monsters))
    })
}  