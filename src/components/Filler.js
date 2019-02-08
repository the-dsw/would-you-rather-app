import React from 'react'

const filler = props => {
    return (
        <div className="filler" style={{ width: `${props.percentage}%`}}>
            {props.percentage}%
        </div>
    )
}

export default filler