import React from 'react'
import {FaCheck} from "react-icons/fa";
import ProgressBar from './ProgressBar'

const results = ({
    question,
    userAnswer,
    questionAnswered,
    optionTextOnePercentage,
    optionTextTwoPercentage,
    totalVotesOptionOne,
    totalVotesOptionTwo,

}) => {

    return (
        <div className="poll-container">
            <div className="poll-header">
                <h3>{question.name} asks:</h3>
            </div>
            <div className="results-body">
                <img
                    src={require(`../images/${question.avatar}.jpg`)}
                    alt={`Avatar of ${question.avatar}`}
                    className="avatar-results"
                />
                <div className="vl-results"></div>
                <div className="poll-results">
                    <h3>Results:</h3>
                    <div className={userAnswer === 'optionOne' ? "result-view selected-option" : "result-view"}>
                        {userAnswer === 'optionOne'
                            ? <span className="text-one">Would you rather {question[questionAnswered].text} <FaCheck style={{color: '#69A425'}} /></span>
                            : <span>Would you rather {question.optionOne.text} ?</span>
                        }
                        <br/>
                        <span>
                        <ProgressBar percentage={optionTextOnePercentage}/>
                    </span><br/>
                        <span>
                        1 out of {totalVotesOptionOne} votes
                    </span><br />
                    </div>
                    <div className={userAnswer === 'optionTwo' ? "result-view selected-option" : "result-view"}>
                        {userAnswer === 'optionTwo'
                            ? <span className="text-two">Would you rather {question[questionAnswered].text} <FaCheck style={{color: '#69A425'}} /></span>
                            : <span>Would you rather {question.optionTwo.text} ?</span>
                        }
                        <br/>
                        <span>
                        <ProgressBar percentage={optionTextTwoPercentage}/>
                    </span><br/>
                        <span>
                        1 out of {totalVotesOptionTwo} votes
                    </span><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default results