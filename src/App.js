import React, { Component } from 'react';
import ExempleSubmit from './Exemples/Submit';
import ExempleInitialValues from './Exemples/InitialValues';
import ExempleSynchronousValidation from './Exemples/SynchronousValidation';

class App extends Component {
  render() {
    return (
        <div style={{display: 'flex', margin:'50px', justifyContent:'space-around'}}>
          <ExempleSubmit />
          <ExempleInitialValues />
          <ExempleSynchronousValidation />
        </div>
    );
  }
}

export default App
