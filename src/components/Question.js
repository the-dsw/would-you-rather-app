import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
    render() {
        const { question } = this.props

        if(question === null) {
            return <p>This question doesn't exists!</p>
        }

        const { id, timestamp,name,avatar, optionOne, optionTwo } = question

        return (
            <div className="question-list">
                <div className="question-header">
                    <h3>{name} asks:</h3>
                </div>
                <div className="question-body">
                    <img
                        src={require(`../images/${avatar}.jpg`)}
                        alt={`Avatar of ${avatar}`}
                        className="avatar-question"
                    />
                    <div className="vl"></div>
                    <div className="question-view">
                        <h3>Would you rather</h3>
                        <p>...something...</p>
                        <button>
                            View Poll
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]

    return {
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
        //question
    }
}

export default connect(mapStateToProps)(Question)