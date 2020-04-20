import React from "react";
import MonsterListIndex from "./monster_list_index"
import MonsterShowContainer from "../monster_show/monster_show_container";

class MonsterList extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      monsterSearch: "",
      selectedMonster: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({monsterSearch: event.target.value});
  }

  //when someone clicks on a monster "monsterSelect" is populated with the api index
  //fetch selected monster calls the monster api and passes the index
  //the monster's limited data is then replaced in the store with the expanded info from the new api call
  //that is then rendered to the page via the monster show component
  // it may be more optimal to store the expanded monster data in a separate collection
  handleClick(event) {
    debugger
    this.setState({selectedMonster: event.target.id});
  
  }
  

  componentDidMount() {
    this.props.fetchAllMonsters();
  }

  render (){
    return(
      <div>
        {this.state.selectedMonster ? <MonsterShowContainer selectedMonster={this.state.selectedMonster} /> : <MonsterListIndex clickFunc={this.handleClick} changeFunc={this.handleChange} monsters={this.props.monsters} monsterSearch={this.state.monsterSearch}/> }
      </div>
    )
  }
}

export default MonsterList;