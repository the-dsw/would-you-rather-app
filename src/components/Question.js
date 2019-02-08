import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion, formatDate } from "../utils/helpers";

class Question extends Component {
    render() {
        const { question } = this.props

        if(question === null) {
            return <p>Not question yet</p>
        }

        const {id , timestamp, name, avatar, optionOne } = question


        return (
            <div className="question-list">
                <div className="question-header">
                    <h3>{name} asks:</h3>
                    <span>{formatDate(timestamp)}</span>
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
                        <div>
                            <p>... {optionOne.text} ...</p>
                        </div>

                        <Link to={`/question/${id}`}>
                            <button>View Poll</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users }, { question }) {

    return {
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(Question)