import React, { Component } from 'react';
import  { Message }  from 'semantic-ui-react';

class Welcome extends Component {

    render() {
      return (
        <div className="Welcome">
          <Message centered="true">
            <Message.Header>
              IOTA Online Seed Generator
            </Message.Header>
            <p>
              Created with <span role="img" aria-label="Hearts">💖</span> &amp; <span role="img" aria-label="Coffe">☕</span> 
              by <a href="https://www.github.com/Irvollo">Irvollo</a>
            </p>
          </Message>
        </div>
      );
    }
  }

export default Welcome;