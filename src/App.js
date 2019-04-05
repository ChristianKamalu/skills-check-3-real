import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import {HashRouter, Link} from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      create: false
    }
  }

  handleCreate = () => this.state.create ? this.setState({create: false}) : this.setState({create: true})

  render() {
    return (
      <HashRouter>
        {/* <div className="body"> */}
        <div>
          
        </div>
      </HashRouter>
    );
  }
}

export default App;
