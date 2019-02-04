import React, {Component} from "react";
import {connect} from 'react-redux'

class Dashboard extends  Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.questionIds.map(id => (
                        <li key={id}>
                            <div>Question ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    };
}

export default connect(mapStateToProps)(Dashboard)