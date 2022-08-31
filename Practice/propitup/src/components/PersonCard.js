import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <h4>{ age }</h4>
                <h4>{ hairColor }</h4>
            </div>
        );
    }
}

export default PersonCard;