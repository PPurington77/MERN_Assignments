import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentAge : props.age
        }
    }

    addYear = () => {
        this.setState({
            currentAge : this.state.currentAge + 1
        })
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <h4>{ this.state.currentAge }</h4>
                <h4>{ hairColor }</h4>
                <button onClick={this.addYear}>Birthday Button for { firstName } { lastName }</button>
            </div>
        );
    }
}

export default PersonCard;