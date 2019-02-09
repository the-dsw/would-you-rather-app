import React, {Component} from "react";
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends  Component {
    state = {
        tab: 0,
        isActive: false
    }

    handleUnaswered = () => {
        this.setState(prevState => ({
            tab: prevState.tab = 0,
            isActive: !prevState.isActive
        }))
    }

    handleAswered = () => {
        this.setState(prevState => ({
            tab: prevState.tab = 1,
            isActive: !prevState.isActive
        }))

    }

    render() {
        const { tab, isActive } = this.state
        const { answeredQuestions, unansweredQuestions } = this.props

        return (
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div
                        className={!isActive ? "dashboard-unanswered is-active" : "dashboard-unanswered"}
                        onClick={() => this.handleUnaswered()}>
                        Unanswered Questions
                    </div>
                    <div
                        className={isActive ? "dashboard-answered is-active": "dashboard-answered"}
                        onClick={() => this.handleAswered()}>
                        Answered Questions
                    </div>

                </div>
                <ul className="dashboard-list">
                    {tab === 1 &&  Object.keys(answeredQuestions).map(id => (
                        <li key={id}>
                           <Question question={answeredQuestions[id]} />
                        </li>
                    ))}

                    {tab === 0 && Object.keys(unansweredQuestions).map(id => (
                        <li key={id}>
                            <Question question={unansweredQuestions[id]} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


function mapStateToProps({ questions, users, authedUser }) {
    const answeredQuestions = []
    const unansweredQuestions = []

    Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        .map(id => questions[id])
        .filter(q => {
            if (users[authedUser].answers.hasOwnProperty(q.id)) {
                return answeredQuestions.push(q)
            } else {
                return unansweredQuestions.push(q)
            }
        })

    return {
        answeredQuestions,
        unansweredQuestions,
        authedUser,
    };
}

export default connect(mapStateToProps)(Dashboard)