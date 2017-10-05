import React, { Component } from 'react';
import ExempleSubmit from './Exemples/Submit';
import ExempleInitialValues from './Exemples/InitialValues';
import ExempleSynchronousValidation from './Exemples/SynchronousValidation';
import ExempleDispatchOnSubmit from './Exemples/DispatchOnSubmit';
import ExempleFormValueSelector from './Exemples/FormValueSelector';

class App extends Component {
  render() {
    return (
        <div style={{display: 'flex', margin:'50px', justifyContent:'space-around', flexWrap: 'wrap'}}>
          { brique(<ExempleSubmit />) }
          { brique(<ExempleInitialValues />) }
          { brique(<ExempleSynchronousValidation />) }
          { brique(<ExempleDispatchOnSubmit />) }
          { brique(<ExempleFormValueSelector />) }
        </div>
    );
  }
}
const brique = (composant) => (
    <div style={{width:'250px', padding:'10px', margin:'10px', border: '1px solid lightgray'}}>
      {composant}
    </div>
)

export default App
