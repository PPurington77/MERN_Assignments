import React from 'react'

const PersonCard = props => {
    const {firstName, lastName, age, hairColor} = props;
    return(
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>{ age }</p>
            <p>{ hairColor }</p>
        </div>
    )
}

export default PersonCard;