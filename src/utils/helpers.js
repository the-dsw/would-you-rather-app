export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, authedUser ) {
    const { id, timestamp, optionOne, optionTwo } = question
    const { name, avatarURL, answers } = author

    return {
        id,
        timestamp,
        name,
        avatar: avatarURL,
        optionOne: {
            votes: answers.includes(authedUser),
            text: optionOne.text,
        },
        optionTwo: {
            votes: answers.includes(authedUser),
            text: optionTwo.text,
        }
    }
}


