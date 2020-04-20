import * as DndApiUtil from "../util/dnd_api_util"; 

export const RECEIVE_MONSTERS = "RECEIVE_MONSTERS"
export const RECEIVE_MONSTER = "RECEIVE_MONSTER"

export const receiveMonsters = (monsters) => {
  return {
    type: RECEIVE_MONSTERS,
    monsters: monsters.results
  }
};

export const receiveMonster = (monster) => {
  return {
    type: RECEIVE_MONSTER,
    monster
  }
}

export const fetchAllMonsters = () => dispatch => {
  return DndApiUtil.getMonsters()
    .then(monsters => {
      dispatch(receiveMonsters(monsters))
    })
}  

export const fetchSelectedMonster = (index) => dispatch => {
  return DndApiUtil.getMonster(index)
    .then(monster => {
      dispatch(receiveMonster(monster))
    })
}