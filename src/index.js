import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import './index.css';
import App from './App';

const appReducer = (state = {compteur: 10}, action) => {
  switch (action.type) {
    case 'NUMERO':
      return {
          ...state,
        compteur: 1000 + Number(action.numero) // Ajoute 1000 pour montrer qu'on est passé dans le reducer.
      }
    default: return state
  }
}

let store = createStore(
    combineReducers({
      app: appReducer,
      form: formReducer
    }) ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
