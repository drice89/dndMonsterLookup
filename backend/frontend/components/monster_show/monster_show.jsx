import React from "react";

class MonsterShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchSelectedMonster(this.props.selectedMonster)
  }
  render () {
    let monsterIndex = this.props.monster.index
    let _selectedMonster = this.props.selectedMonster
    return(
      <div>
        {
          monsterIndex === _selectedMonster 
            ? <ul>
                <li>{this.props.monster.name}</li>
                <li>{this.props.monster.type}</li> 
              </ul>
            : <div>{this.props.selectedMonster}</div>
          }
      </div>
    )
  }
}

export default MonsterShow;
