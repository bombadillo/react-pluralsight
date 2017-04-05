import React from 'react';

function clickHandler() {
    alert('I have no state 😪');
}

export default (props) => {
    return (
        <button className="btn" onClick={clickHandler}>Function Button</button>
    )
}