import React, { Component } from 'react';
import Logo from '../../public/logo.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="main-heading">Here you come!</h1>
          <h2 className="secondary-heading">Your MERN application is successfully generated.</h2>
          <Logo />
        </header>
        <p className="paragraph">
          To get started, edit <code>src/App/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;