import { UPDATE_USERINFO } from '../actions'

// Reducer = (current_state, action) => new_state

const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USERINFO:
            console.log(action.newUserInfo)
            return action.newUserInfo

        default:
            return state
    }
}

export default userInfoReducer