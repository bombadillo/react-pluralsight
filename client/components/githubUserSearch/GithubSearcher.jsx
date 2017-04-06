import React from 'react';

import Cards from './cards/Cards.jsx';
import Form from './form/Form.jsx';

export default class GithubSearcher extends React.Component {

    state = {
        cards: []
    }

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    }

    render() {
        return (
            <div className="empty">
                <h3>Github Searcher</h3>
                <div className="columns">
                    <div className="column col-3 centered">
                        <Form onSubmit={this.addNewCard}/>
                    </div>
                </div>

                <div className="columns">                
                    <div className="column col-3 centered">                    
                        <Cards cards={this.state.cards}/>
                    </div>
                </div>
            </div>
        )
    }    
}