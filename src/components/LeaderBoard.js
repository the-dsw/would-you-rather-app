import React from 'react'
import { connect } from 'react-redux'

const leaderBoard  = (props) => {
    const { users, placement } = props

    return (
        <div>
            {placement.sort((a,b) => b.score - a.score ).map(user => {
                const totalQuestions = users[user.id].questions.length
                const totalAnswers = Object.keys(users[user.id].answers).length
                const score = totalQuestions + totalAnswers

                return (
                    <div className="leaderboard-container" key={user.id}>
                        <img
                            src={require(`../images/${users[user.id].avatarURL}.jpg`)}
                            alt={`Avatar of ${users[user.id].avatarURL}`}
                            className="avatar-question"
                        />
                        <div className="vl"></div>
                        <div className="leaderboard-info">
                            <span className="info-title">{users[user.id].name}</span>
                            <span className="info-answered"> Answered Questions <span>{totalAnswers}</span></span>
                            <div className="hl-info"></div>
                            <span className="info-created"> Created Questions <span>{totalQuestions}</span></span>
                        </div>
                        <div className="vl"></div>
                        <div className="leaderboard-score">
                            <div className="score-title">score</div>
                            <div className="score-points">{score}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function mapStateToPorps ({ users }) {
    const userIds = Object.keys(users)
    const placement = userIds.map(id => ({
        id,
        score: Object.keys(users[id].answers).length + Object.keys(users[id].questions).length
    }))

    return {
        users,
        placement
    }
}
export default connect(mapStateToPorps)(leaderBoard)