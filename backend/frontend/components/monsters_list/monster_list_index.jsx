import React from "react";
import {displayMonster} from "../../util/general_util"

const MonsterListIndex = ({changeFunc, monsters, monsterSearch, clickFunc}) => (

  <div>
    <div>
      <label>Search
                <input type="text" name="search" onChange={changeFunc} value={monsterSearch} ></input>
      </label>
    </div>
    <ul>
      {
        monsters.map(el => displayMonster(el.index, monsterSearch) ? <li onClick={clickFunc} key={el.index} id={el.index}>{el.name}</li> : "")
      }
    </ul>
  </div>
)

export default MonsterListIndex;