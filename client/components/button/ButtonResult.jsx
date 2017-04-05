import React from 'react';

export default (props) => {
    return (
        <div>
            {!props.counter &&
                <span>Awaiting result...</span>
            } 
            
            {props.counter > 0 &&
                props.counter
            }                   
        </div>    
    )
}