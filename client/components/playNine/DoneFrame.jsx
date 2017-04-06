import React from 'react';

export default (props) => {

    return (
        <div className="column col-7 text-center centered">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-primary" onClick={props.resetGame}>Play again</button>
        </div>        
    )

}