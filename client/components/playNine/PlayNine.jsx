import React from 'react';

import Stars from './Stars.jsx';
import Button from './Button.jsx';
import Answer from './Answer.jsx';
import Numbers from './Numbers.jsx';

export default class PlayNine extends React.Component {
 
    state = {
        selectedNumbers: [2, 4],
        numberOfStars: 1 + Math.floor(Math.random()*9)
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber)
        }));
    }

    render() {
        const { selectedNumbers, numberOfStars } = this.state;

        return (
            <div>
                <h3>Play Nine</h3>
                <div className="columns">
                    <Stars numberOfStars={numberOfStars} /> 
                    <Button selectedNumbers={selectedNumbers} />      
                    <Answer selectedNumbers={selectedNumbers} 
                        unselectNumber={this.unselectNumber} />      
                </div>

                <div className="columns">
                    <Numbers selectedNumbers={selectedNumbers}
                        selectNumber={this.selectNumber}/>
                </div>
            </div>
        )
    }

}