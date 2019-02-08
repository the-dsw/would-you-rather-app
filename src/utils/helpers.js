export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, authedUser, parentQuestion) {
    const { id, timestamp, optionOne, optionTwo } = question
    const { name, avatarURL } = author

    return {
        id,
        timestamp,
        name,
        avatar: avatarURL,
        optionOne: {
            votes:  optionOne.votes,
            text: optionOne.text,
        },
        optionTwo: {
            votes: optionTwo.votes,
            text: optionTwo.text,
        }
    }
}


