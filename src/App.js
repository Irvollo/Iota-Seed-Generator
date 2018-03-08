import React, { Component } from 'react';
//import logo from './logo.svg';
import { Button, Dimmer, Loader} from 'semantic-ui-react';
import  Seed   from './components/Seed' 
import  FakeStats   from './components/FakeStats' 
import  Welcome   from './components/Welcome' 
import  FeatureMenu   from './components/FeatureMenu' 
import  Donations   from './components/Donations' 
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
        < Welcome />
        { this.state.showSeedMenu ? null : <FakeStats />}
        <div className="SeedMenu">
          {this.state.showSeedMenu ? <Seed /> : <Button color='teal' size="large" onClick={this.showLoader} >Generate Seed</Button>}
          <FeatureMenu />
          {this.state.loader ? 
            <Dimmer active>
              <Loader inverted>Generating your new seed</Loader>
            </Dimmer>
          : null }
        </div>
        <Donations />
      </div>
    );
  }
}

export default App;
