import React from 'react'
import { connect } from 'react-redux'

const Skills = ({ name, skills }) => {    
    return (
        <div className="sidebar">
            <h2>{name}'s Skills</h2>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.userInfo.name,
        skills: state.skills
    }
}

export default connect(mapStateToProps, undefined)(Skills)