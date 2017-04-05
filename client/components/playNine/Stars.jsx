import React from 'react';

import styles from './stars.css';

export default (props) => {   

    return (
        <div className="column col-3">
            {_.range(props.numberOfStars).map(i => 
                <span key={i} className={'label label-primary '+ styles.icon}>
                    <i className="icon icon-plus"></i>
                </span>                
            )}         
        </div>
    )
}