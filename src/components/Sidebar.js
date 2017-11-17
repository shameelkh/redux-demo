import React from 'react'
import { connect } from 'react-redux'

const Sidebar = ({ name }) => {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <p>Name: <span className="stress">{name}</span></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.userInfo.name
    }
}

export default connect(mapStateToProps, undefined)(Sidebar)