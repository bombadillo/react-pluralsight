import React from 'react';

export default class Button extends React.Component {

    state = {
        counter: 0
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <button className="btn" onClick={this.incrementCounter}>
                Component Button {this.state.counter}
            </button>
        )
    }
}