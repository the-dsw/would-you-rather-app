import React from 'react'

const votesForm = ({
    question,
    onSubmit,
    selectedOption,
    onChange

}) => (
    <div className="poll-container">
        <div className="poll-header">
            <h3>{question.name} asks:</h3>
        </div>
        <div className="poll-body">
            <img
                src={require(`../images/${question.avatar}.jpg`)}
                alt={`Avatar of ${question.avatar}`}
                className="avatar-question"
            />
            <div className="vl-poll"></div>
            <div className="poll-view">
                <h3>Would you rather ...</h3>
                <form onSubmit={onSubmit} className="poll-form">
                    <input
                        type="radio"
                        name="group1"
                        id="group1"
                        value="optionOne"
                        checked={selectedOption === 'optionOne'}
                        onChange={onChange}
                    />
                    <label for="group1"> {question.optionOne.text}</label><br /><br />
                    <input
                        type="radio"
                        name="group1"
                        id="group2"
                        value="optionTwo"
                        checked={selectedOption === 'optionTwo'}
                        onChange={onChange}
                    />
                    <label for="group2"> {question.optionTwo.text}</label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
)

export default votesForm