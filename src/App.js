import React, { Component } from 'react';
//import logo from './logo.svg';
import { Button, Message} from 'semantic-ui-react';
import  Seed   from './components/Seed' 
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSeedMenu: false,
      loader: false
    }
    this.showSeedMenu = this.showSeedMenu.bind(this);
    this.showLoader = this.showLoader.bind(this);
  }
 
  showSeedMenu() {
    this.setState({
      showSeedMenu: true,
      loader: false
    });
  }

  showLoader(){
    this.setState({
      showSeedMenu: false,
      loader: true
    });
    setTimeout(this.showSeedMenu, 5000)
  }

  render() {
    return (
      <div className="App">
        <div className="Welcome">
          <Message>
            <Message.Header>
              Online Seed Generator
            </Message.Header>
            <p>
              Welcome to the Free IOTA Online Seed Generator, to generate your new seed please press the button.
            </p>
          </Message>
        </div>
        <div className="SeedMenu">
        {this.state.showSeedMenu ? <Seed /> : <Button onClick={this.showLoader} >Click Here</Button>}
        {this.state.loader ? <p>Generating your new seed</p> : null }
        </div>
      </div>
    );
  }
}

export default App;
