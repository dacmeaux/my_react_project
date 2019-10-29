import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Component} from 'react';
import Header from "./components/layout/Header";
import Contact from "./components/pages/Contact";
import CodeExamples from "./components/pages/CodeExamples";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  Home = () => (
      <React.Fragment>
        <h1>My REACT App</h1>
        <p>This is my first solo react project</p>
        <div><img src={logo} className="App-logo" alt="logo"/></div>
      </React.Fragment>
  );

  render() {
    return (
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" render={this.Home} />
            <Route path="/home" render={this.Home} />
            <Route path="/code-examples" component={CodeExamples} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
    )
  }
}

export default App;