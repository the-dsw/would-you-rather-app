import React from 'react'
import Filler from './Filler'

const progressBar = props => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage}/>
        </div>
    )
}

export default progressBar