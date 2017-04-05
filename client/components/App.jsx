import React from 'react';

import Buttons from './button/Buttons.jsx';

require("!style-loader!css-loader!spectre.css/dist/spectre.min.css");

export default class App extends React.Component {

    render() {
        return (
            <div className="container">
                
                <Buttons />

            </div>
        )
    }
}