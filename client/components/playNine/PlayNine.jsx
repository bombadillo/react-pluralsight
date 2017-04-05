import React from 'react';

import Stars from './Stars.jsx';
import Button from './Button.jsx';
import Answer from './Answer.jsx';
import Numbers from './Numbers.jsx';

export default class PlayNine extends React.Component {

    render() {
        return (
            <div>
                <h3>Play Nine</h3>
                <div className="columns">
                    <Stars /> 
                    <Button />      
                    <Answer />      
                </div>

                <div className="columns">
                    <Numbers />
                </div>
            </div>
        )
    }

}