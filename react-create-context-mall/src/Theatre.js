import React, { Component } from 'react';
import { AppContext } from './App'
import Screen from './Screen'

class Theatre extends Component {
    render() {
        return (
            <div>
                <h3>Theatre Name :     
                    <AppContext.Consumer>
                        {(context) =>   context.theatre}
                    </AppContext.Consumer>
                    <br/><br/></h3>
                <Screen />
            </div>
        );

    }
}

export default Theatre;