import { combineReducers } from 'redux'
import UserInfoReducer from './UserInfoReducer'

const stateToReducers = {
    userInfo: UserInfoReducer
}

const AppReducer = combineReducers(stateToReducers)

export default AppReducer