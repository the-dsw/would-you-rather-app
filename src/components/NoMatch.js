import React from 'react'

export default function NoMatch({ location }) {
    return (
        <div className="notMatch">
            <h1>404</h1>
            <p>
               Oops, the page you are looking for does not exist. Or you are not login
            </p>
        </div>
    );
}