import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import EditUserInfo from './components/EditUserInfo'
import EditSkillsForm from './components/EditSkillsForm'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'

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
          {/* <Sidebar /> */}
          <EditUserInfo />
        </div>
      </div>
    );
  }
}

export default App;
