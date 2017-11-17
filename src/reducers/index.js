import { combineReducers } from 'redux'
import UserInfoReducer from './UserInfoReducer'

const allReducers = {
    UserInfoReducer: UserInfoReducer
}

const AppReducer = combineReducers(allReducers)

export default AppReducer