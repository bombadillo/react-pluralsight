import React from 'react';

import Stars from './Stars.jsx';
import Button from './Button.jsx';
import Answer from './Answer.jsx';
import Numbers from './Numbers.jsx';
import DoneFrame from './DoneFrame.jsx';
import possibleCombinations from './possibleCombinations.js';

export default class PlayNine extends React.Component {
 
    getRandomStars = () => {
        return 1 + Math.floor(Math.random()*9);
    }

    initialState = () => ({
        selectedNumbers: [],
        numberOfStars: this.getRandomStars(),
        answerIsCorrect: null,
        usedNumbers: [],
        redraws: 5,
        doneStatus: null
    });

    state = this.initialState();

    selectNumber = (clickedNumber) => {
        if (this.state.usedNumbers.indexOf(clickedNumber) >= 0) { return }; 
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return };
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
            answerIsCorrect: null
        }));
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber),
            answerIsCorrect: null
        }));
    }

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars ===
                prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    }

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            numberOfStars: this.getRandomStars()
        }), this.updateDoneStatus);
    }

    redraw = () => {
        console.log(this.state.redraws)
        if (this.state.redraws === 0) { return };

        this.setState(prevState => ({
            selectedNumbers: [],
            answerIsCorrect: null,
            numberOfStars: this.getRandomStars(),
            redraws: prevState.redraws - 1
        }), this.updateDoneStatus);
    }

    possibleSolutions = ({numberOfStars, usedNumbers}) => {
        const possibleNumbers = _.range(1, 10).filter(number => {
            usedNumbers.indexOf(number) === -1;
        });

        return possibleCombinations(possibleNumbers, numberOfStars);
    }

    updateDoneStatus = () => {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return { doneStatus: 'Done. Nice!' }
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return { doneStatus: 'Game Over!' }
            }            
        });
    }

    resetGame = () => this.setState(this.initialState());

    render() {
        const { 
            selectedNumbers, 
            numberOfStars, 
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus
        } = this.state;

        return (
            <div>
                <h3>Play Nine</h3>
                <div className="columns">
                    <Stars numberOfStars={numberOfStars} /> 
                    <Button selectedNumbers={selectedNumbers} 
                        checkAnswer={this.checkAnswer} 
                        answerIsCorrect={answerIsCorrect} 
                        acceptAnswer={this.acceptAnswer} 
                        redraw={this.redraw} 
                        redraws={redraws} />      
                    <Answer selectedNumbers={selectedNumbers} 
                        unselectNumber={this.unselectNumber} />      
                </div>

                <div className="columns">
                    <Numbers selectedNumbers={selectedNumbers}
                        selectNumber={this.selectNumber} 
                        usedNumbers={usedNumbers} />
                </div>

                {doneStatus &&
                    <div className="columns">
                        <DoneFrame doneStatus={doneStatus}
                            resetGame={this.resetGame} />
                    </div>                
                }
                
            </div>
        )
    }

}