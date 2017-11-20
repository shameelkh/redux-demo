import { UPDATE_USERINFO } from '../actions'

// Reducer = (current_state, action) => new_state

const defaultState = {
    name: 'Tom',
    hobby: 'Cooking'
}

const UserInfoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_USERINFO:
            return action.newUserInfo

        default:
            return state
    }
}

export default UserInfoReducer