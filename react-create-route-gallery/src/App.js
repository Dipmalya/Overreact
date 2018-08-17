import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Components/Main'
import Navigation from './Components/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div className="App">
            <Main />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
