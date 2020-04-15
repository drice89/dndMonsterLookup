import React from "react";

class MonsterList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      monsters: null
    };
  }
  componentDidMount() {
    this.fetchAllMonsters();
  }

  fetchAllMonsters() {
    return $.ajax({
      url: "http://www.dnd5eapi.co/api/monsters/",
      type: "GET"
    }).then(res => this.setState({monsters : res}))
  }

  render (){
    if (!this.state.monsters) {
      return <div />
    }
    return(
      <ul>
        {
          this.state.monsters.results.map(el => <li key={el.index} id={el.index}>{el.name}</li>)
        }
      </ul>
    )
  }

}

export default MonsterList;