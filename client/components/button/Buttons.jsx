import React from 'react';

import FunctionButton from './FunctionButton.jsx';
import ComponentButton from './ComponentButton.jsx';
import ComponentButtonExternalResult from './ComponentButtonExternalResult.jsx';
import ButtonResult from './ButtonResult.jsx';

export default class Buttons extends React.Component {

    state = {
        counter: 0
    }

    incrementCounter = (incrementValue) => {
        this.setState({
            counter: this.state.counter + incrementValue
        })
    }    

    render() {
        return (
            <div>
                <h3>Buttons</h3>
                <div className="columns">                    
                    <div className="column col-3 ">
                        <FunctionButton />
                    </div>
                </div>

                <div className="columns">
                    <div className="column col-3 ">
                        <ComponentButton />  
                    </div>
                </div>   


                <div className="columns">
                    <div className="column col-3 ">
                        <b>Component buttons with external result component</b>
                        <div className="text-break"></div>
                        <ComponentButtonExternalResult amountToIncrement={50} onClickFunction={this.incrementCounter} /> 
                        <ComponentButtonExternalResult amountToIncrement={2} onClickFunction={this.incrementCounter} /> 
                        <ComponentButtonExternalResult amountToIncrement={19} onClickFunction={this.incrementCounter} /> 
                        <ComponentButtonExternalResult amountToIncrement={100} onClickFunction={this.incrementCounter} /> 
                        <ComponentButtonExternalResult amountToIncrement={5} onClickFunction={this.incrementCounter} /> 
                        <ComponentButtonExternalResult amountToIncrement={1} onClickFunction={this.incrementCounter} /> 
                        <ButtonResult counter={this.state.counter} /> 
                    </div>
                </div>               
            </div>
        )        
    }
}