import React from 'react';

export default (props) => {
    let button;

    switch(props.answerIsCorrect) {
        case true:
            button = 
                <label className="label label-success" onClick={props.acceptAnswer}>
                    <i className="icon icon-check"></i>
                </label>               
            break;
        
        case false:
            button = 
                <label className="label label-danger">
                    <i className="icon icon-cross"></i>
                </label>
            break;

        default:
            button =                 
                <label className={'label label-' + (props.selectedNumbers.length === 0 ? 'default' : 'primary') }
                    onClick={props.checkAnswer}>
                    <i className="icon icon-menu"></i>
                </label>
            break;
    }

    return (
        <div className="column col-2">
            {button}

            <br /> <br />

            <label className="label label-warning" onClick={props.redraw}>
                <i className="icon icon-refresh">                    
                </i>
                {props.redraws}
            </label>
        </div>
    )
}