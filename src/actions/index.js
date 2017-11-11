
export const RECIEVE_USERINFO = 'RECIEVE_USERINFO'
export const UPDATE_USERINFO = 'UPDATE_USERINFO'

export const updateUserInfo = (updatedUserInfo) => {
    return {
        type: UPDATE_USERINFO,
        updatedUserInfo
    }
}


