import React from 'react';
import { Route } from "react-router-dom";

import Home from './home'
import Samsung from './samsung'
import Nokia from './nokia'
import Mi from './mi'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/samsung' component={Samsung} />
                <Route path='/mi' component={Mi} />
                <Route path='/nokia' component={Nokia} />
            </div>
        )
    }
}

export default Main