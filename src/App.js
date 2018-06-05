import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxDemo from './ReduxDemo';
import {Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div className="app">
          <div className="container mt-4">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
