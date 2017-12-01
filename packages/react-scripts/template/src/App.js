import React, { Component } from 'react';
import codelink from './assets/img/codelink.jpg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div styleName="app">
        <header styleName="app-header">
          <img src={codelink} styleName="app-logo" alt="logo" />
          <h1 styleName="app-title">Welcome to CodeLink Training Program</h1>
        </header>
      </div>
    );
  }
}

export default App;
