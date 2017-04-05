import React from 'react';

export default class ComponentButtonExternalResult extends React.Component {

    incrementCounter = () => {
        this.props.onClickFunction(this.props.amountToIncrement);
    }

    render() {
        return (
            <button className="btn" onClick={this.incrementCounter}>
                +{this.props.amountToIncrement}
            </button>
        )
    }

}