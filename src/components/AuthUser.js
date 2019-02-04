import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser.js'
import { Redirect, withRouter } from 'react-router-dom'
import auth from '../utils/auth'

class AuthUser extends Component {
    state = {
        redirectToReferrer: false
    }

    handleLogin = id => {
        const { dispatch } = this.props

        auth.authenticate(() => {
            dispatch(setAuthedUser(id))
            this.setState({ redirectToReferrer: true })
        })
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/dashboard'}}
        const { redirectToReferrer } = this.state
        const { id, users } = this.props

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <div className="auth-user">
                <div className="avatar-user">
                    <img
                        src={require(`../images/${users[id].avatarURL}.jpg`)}
                        alt={`Avatar of ${users[id].avatarURL}`}
                        className="avatar-login"
                    />
                    <h3 className="auth-user-name">{`${users[id].name}`}</h3>
                    <button
                        className="auth-button"
                        onClick={() => this.handleLogin(id)}
                    >
                        Log in
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }, { id }) {
    return {
        id,
        users
    }
}

export default withRouter(connect(mapStateToProps)(AuthUser))