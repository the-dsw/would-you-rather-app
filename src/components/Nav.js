import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthButton from './AuthButton'

class Nav extends Component {

    render() {
        const { user, authedUser } = this.props

        return (
            <nav className="nav">
                 <ul>
                    <li className="link-wrapper">
                        <NavLink
                            to="/dashboard"
                            activeClassName="active" exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="link-wrapper">
                        <NavLink
                            to="/add"
                            activeClassName="active" exact>
                            New Question
                        </NavLink>
                    </li>
                    <li className="link-wrapper">
                        <NavLink
                            to="/leaderboard"
                            activeClassName="active" exact>
                            Leader Board
                        </NavLink>
                    </li>
                     {authedUser && (
                         <ul>
                             <li>
                                 <div className="nav-item">
                                     <span>Hello, {user ? user.name : null}</span>
                                     <img
                                         src={require(`../images/${user.avatarURL}.jpg`)}
                                         alt={`Avatar of ${user.avatarURL}`}
                                         className="avatar-login"
                                     />
                                 </div>
                             </li>
                             <AuthButton />
                         </ul>
                     )}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    const user = users[authedUser]
    return {
        user,
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)