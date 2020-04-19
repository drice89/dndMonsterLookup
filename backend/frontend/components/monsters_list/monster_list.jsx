import React from "react";

class MonsterList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllMonsters();
  }

  render (){
    return(
      <ul>
        {
          this.props.monsters.map(el => <li key={el.index} id={el.index}>{el.name}</li>)
        }
      </ul>
    )
  }
}

export default MonsterList;