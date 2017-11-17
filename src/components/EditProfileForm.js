import React from 'react'
import { connect } from 'react-redux'
import { updateUserInfo } from '../actions'

class EditProfileForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            hobby: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let newUserInfo = {
            name: this.state.name,
            hobby: this.state.hobby
        }

        this.props.dispatch( updateUserInfo(newUserInfo) )
    }

    render() {
        return (
            <div className="page">
                <h2>Edit UserInfo</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Name: <input type="text" name="name"
                                     value={this.state.name}
                                     onChange={this.handleChange}/>
                    </div>
                    <div>
                        Hobby: <input type="text" name="hobby"
                                      value={this.state.hobby}
                                      onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Update!" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(EditProfileForm)