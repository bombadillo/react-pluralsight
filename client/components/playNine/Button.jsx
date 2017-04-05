import React from 'react';

export default (props) => {
    return (
        <div className="column col-1">
            <button className="btn" disabled={props.selectedNumbers.length === 0 }>=</button>
        </div>
    )
}