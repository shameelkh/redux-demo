import React from 'react'

const Profile = () => {
    const userInfo = {
        name: 'Tommy',
        email: 'Tom@gmail.com',
        hobby: 'Cooking'
    }

    return (
        <div className="page">
            <h2>Profile Page</h2>
            <p>
                Welcome <span className="stress">{userInfo.name}</span>!!
                I know you like <span className="stress">{userInfo.hobby}</span>.
            </p>
        </div>
    )
}

export default Profile