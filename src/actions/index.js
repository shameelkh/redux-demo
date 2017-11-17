
// Actions
export const FETCH_USERINFO = 'FETCH_USERINFO'
export const UPDATE_USERINFO = 'UPDATE_USERINFO'

// Action Creators

export const updateUserInfo = (newUserInfo) => {
    return {
        type: UPDATE_USERINFO,
        newUserInfo: newUserInfo
    }
}
