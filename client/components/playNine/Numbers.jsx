import React from 'react';
import _ from 'lodash';

import styles from './numbers.css';

export default (props) => {
    const arrayOfNumbers = _.range(1, 10);
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'danger';
        } else {
            return 'primary';
        }
    }

    return (
        <div className="column col-7 card text-center">
            <div>
                {arrayOfNumbers.map((number, i) => 
                    <span key={i} 
                        className={`label label-${numberClassName(number)} ${styles.number}`}
                        onClick={() => props.selectNumber(number)}>
                        {number}
                    </span>
                )}
            </div>
        </div>
    )
}