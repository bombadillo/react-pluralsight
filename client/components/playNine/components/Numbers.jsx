import React from 'react';
import _ from 'lodash';

import styles from './numbers.css';

export default (props) => {
    const arrayOfNumbers = _.range(1, 10);
    const numberClassName = (number) => {

        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'warning';
        }

        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'danger';
        } 

        return 'primary';
    }

    return (
        <div className="column col-7 card text-center centered">        
            <h4>Available numbers</h4>
            {arrayOfNumbers.map((number, i) => 
                <span key={i} 
                    className={`label label-${numberClassName(number)} ${styles.number}`}
                    onClick={() => props.selectNumber(number)}>
                    {number}
                </span>
            )}
        </div>
    )
}