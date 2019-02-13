import React from 'react'
import ProgressBar from './ProgressBar'
import { FaThumbsUp } from "react-icons/fa";

const results = ({
    question,
    users,
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
                    src={require(`../images/${users[question.author].avatarURL}.jpg`)}
                    alt={`Avatar of ${users[question.author].avatarURL}`}
                    className="avatar-results"
                />
                <div className="vl-results" />
                <div className="poll-results">
                    <h3>Results:</h3>
                    <div className={userAnswer === 'optionOne' ? "your-vote-one" : "your-vote-two"}>
                        <FaThumbsUp style={{color: "#fff"}} />
                    </div>
                    <div className={userAnswer === 'optionOne' ? "result-view selected-option " : "result-view"}>
                        {userAnswer === 'optionOne'
                            ? <span className="text-one">Would you rather {question[questionAnswered].text} ?</span>
                            : <span>Would you rather {question.optionOne.text} ?</span>
                        }
                        <br/>
                        <span>
                            <ProgressBar percentage={optionTextOnePercentage}/>
                        </span>
                        <p>
                            Total of {totalVotesOptionOne} votes
                        </p>
                    </div>
                    <div className={userAnswer === 'optionTwo' ? "result-view selected-option " : "result-view"}>
                        {userAnswer === 'optionTwo'
                            ? <span className="text-two">Would you rather {question[questionAnswered].text} ?</span>
                            : <span>Would you rather {question.optionTwo.text} ?</span>
                        }
                        <br/>
                        <span>
                            <ProgressBar percentage={optionTextTwoPercentage}/>
                        </span>
                        <p>
                            Total of {totalVotesOptionTwo} votes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default results