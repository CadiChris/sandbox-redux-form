import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
        <p className="App-intro" style={{margin:'50px'}}>
          {this.props.compteur}
        </p>
    );
  }
}

const mapStateToProps = (state) => ({
  compteur: state.compteur
});

export default connect(mapStateToProps)(App)
