import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import EditProfileForm from './components/EditProfileForm'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Redux Demo</h1>
        </header>
        <div className="container">
          <Profile />
          <hr />
          <EditProfileForm />
        </div>
      </div>
    );
  }
}

export default App;
