import React from 'react'
import { withRouter} from "react-router-dom";
import auth from '../utils/auth'

const AuthButton = withRouter(
    ({ history }) =>
        auth.isAuthenticated && (
            <button className="logout-button"
               onClick={() => {
                   auth.signout(() => history.push("/"));
               }}
            >
                Sign out
            </button>
        )
);

export default AuthButton