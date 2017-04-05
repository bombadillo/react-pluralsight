import React from 'react';

import Buttons from './button/Buttons.jsx';

require("!style-loader!css-loader!spectre.css/dist/spectre.min.css");

export default class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column col-3 ">

                        <h3>App started...</h3>

                    </div>
                </div>

                <Buttons />
                                                                       
            </div>
        )
    }
}