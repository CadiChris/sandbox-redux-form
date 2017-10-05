import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
        <p style={{margin:'50px'}}>
          {this.props.compteur}
        </p>
    );
  }
}

const mapStateToProps = (state) => ({
  compteur: state.app.compteur
});

export default connect(mapStateToProps)(App)
