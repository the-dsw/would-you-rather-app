import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends Component {
    state = {
        optionOneText:  '',
        optionTwoText:  '',
        redirectToReferrer: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOneText, optionTwoText } =  this.state
        const { dispatch, authedUser } = this.props

        dispatch(handleSaveQuestion({optionOneText, optionTwoText, authedUser}))
            .then(() => {
                this.setState({ redirectToReferrer: true })
            })

    }

    handleChange = e => {
        const text = e.target.value
        const name = e.target.name

        this.setState({[name]: text})
    }

    render() {
        const { optionOneText, optionTwoText, redirectToReferrer } = this.state
        const disable = optionOneText === '' ? true : optionTwoText === ''


        if (redirectToReferrer) {
            return <Redirect to="/dashboard" />
        }

        return (
            <div className="newquestion-container">
                <h2 className="newquestion-header">Create New Question</h2>
                <form className="form-options" onSubmit={this.handleSubmit}>
                    <span>Complete the question:</span>

                    <p>Would you rather ...</p>

                    <input
                        placeholder="Enter Option Text One"
                        type="text"
                        value={optionOneText}
                        name="optionOneText"
                        onChange={this.handleChange}
                        className="options"
                    />
                    <input
                        placeholder="Enter Option Text Two"
                        type="text"
                        value={optionTwoText}
                        name="optionTwoText"
                        onChange={this.handleChange}
                        className="options"
                    />
                    <button
                        type="submit"
                        className={disable ? 'btn-disabled' : ''}
                        disabled={disable}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(NewQuestion)