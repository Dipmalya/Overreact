import React, { Component } from 'react';

import Mall from './Mall'

export const AppContext = React.createContext()

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      theatre: '  Inox',
      screen: ['Tiger', 'Cheetah', 'Lion'],
      time: ['9 PM', '1 PM', '5 PM']
    }
  }
  render() {
    return (
      <div className="App">
          <br/>
        <AppContext.Provider value={this.state}>
          <Mall />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;