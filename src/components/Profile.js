import React from 'react'

const Profile = () => {
    let userInfo = {
        username: 'Tom',
        email: 'Tom@gmail.com',
        hobby: 'Cooking'
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <UserInfo user={userInfo} />
        </div>
    )
}

const UserInfo = ({ user }) => {
    return (
        <div>
            Username: {user.username} <br/>
            Email: {user.email} <br/>
            Hobby: {user.hobby} <br/>
        </div>
    )
}

export default Profile