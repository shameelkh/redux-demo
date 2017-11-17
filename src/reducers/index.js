import { combineReducers } from 'redux'
import UserInfoReducer from './UserInfoReducer'
import SkillsReducer from './SkillsReducer'

const stateToReducers = {
    userInfo: UserInfoReducer,
    skills: SkillsReducer
}

const AppReducer = combineReducers(stateToReducers)

export default AppReducer