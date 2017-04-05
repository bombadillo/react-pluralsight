import React from 'react';

import styles from './numbers.css';

export default (props) => {
    return (
        <div className="column col-3">
            {props.selectedNumbers.map((number, i) =>
                <span key={i} className={'label label-primary ' + styles.number}
                    onClick={() => props.unselectNumber(number)}>
                    {number}
                </span>
            )}
        </div>
    )
}