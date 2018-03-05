import React, { Component } from 'react';
//import logo from './logo.svg';
import { Button, Message} from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message>
          <Message.Header>
            Online Seed Generator
          </Message.Header>
          <p>
            Welcome to the Free IOTA Online Seed Generator, to generate your new seed please press the button.
          </p>
        </Message>
        <Button>Click Here</Button>
      </div>
    );
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
}

export default App;
