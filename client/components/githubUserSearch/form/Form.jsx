import React from 'react';

import axios from 'axios';

export default class Form extends React.Component {

    state = {
        userName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.userName)

        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.setState({ userName: '' });
                this.props.onSubmit(resp.data);                                
            });
                
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input className="form-input" 
                        type="text" 
                        placeholder="Github username" 
                        onChange={(e) => this.setState({ userName: e.target.value })}
                        value={this.state.userName} 
                        required />
                </div>
                
                <div className="form-group">
                    <button className="btn" type="submit">Add card</button>
                </div>
            </form>
        )
    }
}