import React from 'react';

import styles from './numbers.css';

export default (props) => {
    return (
        <div className="column col-5">
            <h4>Your answer</h4>
            {props.selectedNumbers.map((number, i) =>
                <span key={i} className={'label label-primary ' + styles.number}
                    onClick={() => props.unselectNumber(number)}>
                    {number}
                </span>
            )}

            {props.selectedNumbers.length === 0 && 
                <span className={'label label-primary ' + styles.number}>Empty</span>
            }
        </div>
    )
}