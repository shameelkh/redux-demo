import React from 'react'
import { connect } from 'react-redux'

const Profile = ({ userInfo }) => {
    // const userInfo = {
    //     name: 'Tommy',
    //     email: 'Tom@gmail.com',
    //     hobby: 'Cooking'
    // }

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

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps, undefined)(Profile)