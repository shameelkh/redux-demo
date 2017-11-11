import { UPDATE_USERINFO } from '../actions'

const userInfoReducer = (state = {}, action) => {
    switch (action) {
        case UPDATE_USERINFO:
            return action.updatedUserInfo

        default:
            return state
    }
}