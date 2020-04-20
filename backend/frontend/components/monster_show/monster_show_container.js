import {fetchSelectedMonster} from "../../actions/monster_actions"
import { connect } from "react-redux"
import MonsterShow from "./monster_show";

const mapStateToProps = (state) => ({
  monster: state.monster
})

const mapDispatchToProps = dispatch => ({
  fetchSelectedMonster: monsterIndex => dispatch(fetchSelectedMonster(monsterIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(MonsterShow)