import React, { Component } from 'react'
import { connect } from 'react-redux'
import VotesForm from './VotesForm'
import Results from './Results'
import { formatQuestion } from "../utils/helpers";
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
        const { dispatch, authedUser, questionId} = this.props
        const { selectedOption } = this.state
        dispatch(handleSaveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer: selectedOption
        }))
    }

    render() {
        const {
            users,
            authedUser,
            question,
            questionAnswered,
            questionId
        } = this.props

        const { selectedOption } = this.state

        const totalVotesOptionOne = question.optionOne.votes.length
        const totalVotesOptionTwo = question.optionTwo.votes.length
        const totalVotes = totalVotesOptionOne + totalVotesOptionTwo

        const optionTextOnePercentage = parseInt((totalVotesOptionOne / totalVotes) * 100).toFixed(2)
        const optionTextTwoPercentage = parseInt((totalVotesOptionTwo / totalVotes) * 100).toFixed(2)

        if (questionAnswered === undefined) {
            return (
                <VotesForm
                    question={question}
                    onSubmit={this.handleFormSubmit}
                    selectedOption={selectedOption}
                    onChange={this.handleOptionChange}
                />

            )
        } else {
            return (
                <Results
                    question={question}
                    userAnswer={users[authedUser].answers[questionId]}
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
    return {
        questions,
        users,
        authedUser,
        question: formatQuestion( question, users[question.author], authedUser),
        questionAnswered,
        questionId
    }
}

export default connect(mapStateToProps)(Vote)