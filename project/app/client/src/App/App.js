import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../../public/logo.svg'
import './App.css';

//GET request to server from client
axios.get('/api/', {
  
})
.then(response => {
  
})
.catch(error => {

});

//POST request to server from client
axios.post('/api/', {
  
})
.then(response => {
  
})
.catch(error => {

});

//PUT request to server from client
axios.put('/api/', {
  
})
.then(response => {
  
})
.catch(error => {

});

//DELETE request to server from client
axios.delete('/api/', {
  
})
.then(response => {
  
})
.catch(error => {

});

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