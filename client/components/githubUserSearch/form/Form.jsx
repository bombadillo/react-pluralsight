import React from 'react';

import axios from 'axios';

export default class Form extends React.Component {

    state = {
        userName: '',
        errorMessage: undefined
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                console.log(resp)
                this.setState({ userName: '' });
                this.props.onSubmit(resp.data);
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
            });
    }

    hideMessage = () => {
        this.setState({ errorMessage: undefined });
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

                {this.state.errorMessage && 
                    <div className="form-group">
                        <div className="toast toast-primary">
                            <a className="btn btn-clear float-right" onClick={this.hideMessage}></a>
                            <i className="icon icon-error_outline"></i>
                            {this.state.errorMessage}
                        </div>
                    </div>
                }
                
            </form>
        )
    }
}