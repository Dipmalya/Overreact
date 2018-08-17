import React, { Component } from 'react';
import { AppContext } from './App'

class Screen extends Component {

    showScreen(screen) {
        return <li key={screen}>{screen}</li>
    }

    showTimes(timing) {
        return <li key={timing}>{timing}</li>
    }

    render() {
        let screens = <AppContext.Consumer>
            {(context) => context.screen.map(screen => this.showScreen(screen))}
        </AppContext.Consumer>

        let times = <AppContext.Consumer>
            {(context) => context.time.map(timing => this.showTimes(timing))}
        </AppContext.Consumer>
        
        return (
            <div>
                <h3>Screen Name:</h3>
                <ul>{screens}</ul>

                <h3>Show Times:</h3>
                <ul>{times}</ul>
            </div>
        );
    }
}

export default Screen;