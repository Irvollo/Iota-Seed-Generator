import React, { Component } from 'react';
//import logo from './logo.svg';
import { Button, Message, Dimmer, Loader, Statistic, Segment} from 'semantic-ui-react';
import  Seed   from './components/Seed' 
//import  Warning   from './components/Warning' 
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
    setTimeout(this.showSeedMenu, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className="Welcome">
          <Message centered="true">
            <Message.Header>
              IOTA Online Seed Generator
            </Message.Header>
            <p>
              Created with 💖 &amp; ☕ 
            </p>
          </Message>
        </div>
        { this.state.showSeedMenu ? null : 
        <div className="Stats">
          <Segment>
            <Statistic size="small">
              <Statistic.Value>+100k</Statistic.Value>
              <Statistic.Label>Seeds Generated</Statistic.Label>
            </Statistic>
          </ Segment >
        </div>
        }
        <div className="SeedMenu">
          {this.state.showSeedMenu ? <Seed /> : <Button positive onClick={this.showLoader} >Generate Seed</Button>}
          {this.state.loader ? 
            <Dimmer active>
              <Loader inverted>Generating your new seed</Loader>
            </Dimmer>
          : null }
        </div>
      </div>
    );
  }
}

export default App;
