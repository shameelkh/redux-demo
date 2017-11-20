import React from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions'

class EditSkillsForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newSkill: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (this.state.newSkill.length > 0) {
            this.props.dispatch(addSkill(this.state.newSkill))
        }
    }

    render() {
        return (
            <div className="editForm">
                <h2>Add Skills</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Skill: <input type="text" name="newSkill"
                            value={this.state.newSkill}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Add!" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(EditSkillsForm);