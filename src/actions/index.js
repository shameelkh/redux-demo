
// Actions
export const FETCH_USERINFO = 'FETCH_USERINFO'
export const UPDATE_USERINFO = 'UPDATE_USERINFO'

export const ADD_SKILL = 'ADD_SKILL'

// Action Creators

export const updateUserInfo = (newUserInfo) => {
    return {
        type: UPDATE_USERINFO,
        newUserInfo: newUserInfo
    }
}

export const addSkill = (newSkill) => {
    return {
        type: ADD_SKILL,
        newSkill: newSkill
    }
}