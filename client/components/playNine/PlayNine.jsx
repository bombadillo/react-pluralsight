import React from 'react';

import Stars from './components/Stars.jsx';
import Button from './components/Button.jsx';
import Answer from './components/Answer.jsx';
import Numbers from './components/Numbers.jsx';
import DoneFrame from './components/DoneFrame.jsx';
import possibleCombinations from './services/possibleCombinations.js';

export default class PlayNine extends React.Component {
 
    constructor(props) {
        super(props);
        this.startTimer();
    }

    startTimer = () => {
        setInterval(() => {

            if (this.state.timeLeft <= 0) {
                this.setState({
                    doneStatus: 'Game Over! You ran out of time!'
                });                
            } else {
                this.setState(prevState => ({
                    timeLeft: prevState.timeLeft - 1
                }));                
            }
        }, 1000);
    }

    getRandomStars = () => {
        return 1 + Math.floor(Math.random()*9);
    }

    initialState = () => ({
        selectedNumbers: [],
        numberOfStars: this.getRandomStars(),
        answerIsCorrect: null,
        usedNumbers: [],
        redraws: 5,
        doneStatus: null,
        timeLeft: 60
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
        if (this.state.selectedNumbers.length === 0) { return; }

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
            doneStatus,
            timeLeft
        } = this.state;

        return (
            <div className="empty">
                <div className="columns">
                    <div className="column col-7 centered">                
                        <h3>Play Nine</h3>
                        <h5>Time remaining: {timeLeft}</h5>

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
                </div>
            </div>
        )
    }

}