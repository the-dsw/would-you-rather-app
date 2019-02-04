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
                    <li>
                        <NavLink to="/dashboard" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" activeClassName="active">
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" activeClassName="active">
                            Leader Board
                        </NavLink>
                    </li>
                     {authedUser && (
                         <ul>
                             <li className="nav-item">{user ? user.name : null}</li>
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