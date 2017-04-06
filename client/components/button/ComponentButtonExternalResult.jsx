import React from 'react';

import styles from './buttons.css';

export default class ComponentButtonExternalResult extends React.Component {

    incrementCounter = () => {
        this.props.onClickFunction(this.props.amountToIncrement);
    }

    render() {
        return (
            <button className={`btn ${styles.btn}`} onClick={this.incrementCounter}>
                +{this.props.amountToIncrement}
            </button>
        )
    }

}