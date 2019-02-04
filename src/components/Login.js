import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";
import AuthUser from './AuthUser'

class Login extends Component {
    state = { redirectToReferrer: false };

    componentWillMount() {
        this.props.dispatch(setAuthedUser(false))
    }

    render() {
        const { userIds, location } = this.props
        console.log("location", location)


        return (
            <div className="loginContainer">
                <div className="login-header">
                    <h1 className="login-welcome">Welcome to the Would You Rather App!</h1>
                    <span className="login-continue">Please sign in to continue</span>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p className="login-signin">Sign In</p>
                </div>
                <div className="login-changer">
                    {userIds.map(id => (
                        <AuthUser key={id} id={id} location={location} />
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        userIds: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Login)