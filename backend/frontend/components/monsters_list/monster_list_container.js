import { connect } from "react-redux";
import MonsterList from "./monster_list";
import {fetchAllMonsters, fetchSelectedMonster} from "../../actions/monster_actions"


const mapStateToProps = (state) => ({
  monsters: Object.values(state.monsters)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllMonsters: monsters => dispatch(fetchAllMonsters(monsters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList);