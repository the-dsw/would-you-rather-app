import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from "../actions/authedUser"
import AuthUser from './AuthUser'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

class Login extends Component {
    state = {
        listOpen: false
    }

    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    componentDidMount() {
        this.props.dispatch(setAuthedUser(false))
    }

    render() {
        const { userIds } = this.props
        const {listOpen} = this.state

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
                <div className="login-changer dd-wrapper">
                    <div className="dd-header" onClick={() => this.toggleList()}>
                        <div className="dd-header-title">
                            Select user
                            {listOpen
                                ? <FaAngleDown />
                                : <FaAngleUp />
                            }
                        </div>

                    </div>
                    {listOpen && <ul className="dd-list">
                        {userIds.map(id => (
                            <li key={id} className="dd-list-item">
                                <AuthUser id={id} />
                            </li>

                        ))}

                    </ul>}

                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        userIds: Object.keys(users),
    }
}

export default connect(mapStateToProps)(Login)