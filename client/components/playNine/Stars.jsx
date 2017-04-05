import React from 'react';

import styles from './stars.css';

export default (props) => {

    const numberOfStars = 1 + Math.floor(Math.random()*9);

    return (
        <div className="column col-3">
            {_.range(numberOfStars).map(i => 
                <span key={i} className={'label label-primary '+ styles.icon}>
                    <i className="icon icon-plus"></i>
                </span>                
            )}         
        </div>
    )
}