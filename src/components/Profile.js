import React from 'react'
import { connect } from 'react-redux'

const Profile = () => {
    const userInfo = {
        name: 'Tommy',
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


// TODO: create mapStateToProps

// TODO: use connect(mapStateToProps, undefined)(Profile)
export default Profile