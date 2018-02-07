import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path = '/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
