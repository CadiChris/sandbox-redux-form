import React, { Component } from 'react';
import ExempleSubmit from './Exemples/Submit';
import ExempleInitialValues from './Exemples/InitialValues';
import ExempleSynchronousValidation from './Exemples/SynchronousValidation';
import ExempleDispatchOnSubmit from './Exemples/DispatchOnSubmit';

class App extends Component {
  render() {
    return (
        <div style={{display: 'flex', margin:'50px', justifyContent:'space-around', flexWrap: 'wrap'}}>
          <ExempleSubmit />
          <ExempleInitialValues />
          <ExempleSynchronousValidation />
          <ExempleDispatchOnSubmit/>
        </div>
    );
  }
}

export default App
