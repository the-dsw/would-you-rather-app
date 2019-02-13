import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import VotesForm from './VotesForm'
import Results from './Results'
import { handleSaveQuestionAnswer } from "../actions/questions";


class Vote extends Component {
    state = {
        selectedOption: 'optionOne'
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { questionId, authedUser, handleSaveQuestionAnswer } = this.props
        const { selectedOption} = this.state
        handleSaveQuestionAnswer(authedUser, questionId, selectedOption)
    }

    render() {
        const {
            question,
            authedUser,
            noQuestion,
            questionAnswered,
            users
        } = this.props

        if (noQuestion) {
           return <Redirect to="/" />
        }

        const { selectedOption } = this.state

        const totalVotesOptionOne = question.optionOne.votes.length
        const totalVotesOptionTwo = question.optionTwo.votes.length
        const totalVotes = totalVotesOptionOne + totalVotesOptionTwo

        const optionTextOnePercentage = parseInt((totalVotesOptionOne / totalVotes) * 100).toFixed(2)
        const optionTextTwoPercentage = parseInt((totalVotesOptionTwo / totalVotes) * 100).toFixed(2)

        if (!questionAnswered) {
            return (
                <VotesForm
                    question={question}
                    users={users}
                    onSubmit={this.handleFormSubmit}
                    selectedOption={selectedOption}
                    onChange={this.handleOptionChange}
                />

            )
        } else {

            return (
                <Results
                    question={question}
                    users={users}
                    userAnswer={users[authedUser].answers[question.id]}
                    questionAnswered={questionAnswered}
                    optionTextOnePercentage={optionTextOnePercentage}
                    optionTextTwoPercentage={optionTextTwoPercentage}
                    totalVotesOptionOne={totalVotesOptionOne}
                    totalVotesOptionTwo={totalVotesOptionTwo}

                />
            )
        }
    }
}

function mapStateToProps ({ questions, users, authedUser}, props ) {
    const questionId = props.match.params.id
    const question = questions[questionId]
    const questionAnswered = users[authedUser].answers[questionId]
    const noQuestion = !questions[questionId]
    return {
        questions,
        question,
        noQuestion,
        questionAnswered,
        users,
        authedUser,
        questionId
    }
}

function mapDispatchToProps (dispatch) {
    return {
        handleSaveQuestionAnswer: (authedUser, questionId, selectedOption) => dispatch(handleSaveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer: selectedOption
        }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)