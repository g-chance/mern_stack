import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age: this.props.age };
    }

    clickHandler = () => {
        this.setState(
            { age: this.state.age + 1 }
        )
    }
    // this.setState
    
    render() {
        return (
            <div>
                <h1 className='thing'>{this.props.lastName} {this.props.firstName}</h1>
                <p>{this.state.age}</p>
                <p>{this.props.hairColor}</p>
                <button onClick={this.clickHandler}>BURTHDOY</button>
                {this.props.children}
            </div>
        )
    }
}

export default PersonCard;