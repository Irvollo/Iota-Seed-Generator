import React, { Component } from 'react';
import  { Input, Grid } from 'semantic-ui-react';
import CopyMenu from './CopyMenu'

class Seed extends Component {

    render() {
      return (
        <div className="Seed">
          <p> This is your new seed:</p>
          <Grid centered='true'>
            <Grid.Column width={9}>
              <Grid.Row>
                <Input
                  fluid
                  centered
                  defaultValue='IM9A9HACKER9AND9IM9GONNA9STEAL9ALL9YOUR9IOTAS9IF9YOU9USE9THIS9ONLINE9SEED9GENERATOR'
                />
              </Grid.Row>
              <Grid.Row>
                < CopyMenu />
              </ Grid.Row>
            </Grid.Column>
          </ Grid>
        </div>
      );
    }
  }

export default Seed;