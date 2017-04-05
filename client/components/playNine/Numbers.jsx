import React from 'react';
import _ from 'lodash';

import styles from './numbers.css';

export default (props) => {
    const arrayOfNumbers = _.range(1, 10);

    return (
        <div className="column col-7 card text-center">
            <div>
                {arrayOfNumbers.map((number, i) => 
                    <span key={i} className={'label label-primary ' + styles.number}>{number}</span>
                )}
            </div>
        </div>
    )
}