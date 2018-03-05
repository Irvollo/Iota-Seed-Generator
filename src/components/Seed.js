import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

class Seed extends Component {

    render() {
      return (
        <div className="Seed">
          <p> This is your new seed:</p>
          <Input
            action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
            defaultValue='IM9A9HACKER9AND9IM9GONNA9STEAL9ALL9YOUR9IOTAS'
          />
        </div>
      );
    }
  }

export default Seed;