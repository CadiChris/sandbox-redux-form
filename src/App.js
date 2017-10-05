import React, { Component } from 'react';
import ExempleSubmit from './Exemples/Submit';
import ExempleInitialValues from './Exemples/InitialValues';

class App extends Component {
  render() {
    return (
        <div style={{display: 'flex', margin:'50px', justifyContent:'space-around'}}>
          <ExempleSubmit />
          <ExempleInitialValues />
        </div>
    );
  }
}

export default App
