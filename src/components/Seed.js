import React, { Component } from 'react';
import  { Input, Grid, Segment } from 'semantic-ui-react';
import CopyMenu from './CopyMenu'

class Seed extends Component {

    render() {
      return (
        <div className="Seed">
          <Segment
            style={{ marginLeft: '10%', width:'75%' }}
          >
            <p> This is your new seed:</p>
            <Grid centered='true'>
              <Grid.Column width={14}>
                <Grid.Row>
                  <Input
                    fluid
                    centered
                    defaultValue='IM9A9SCAM9AND9IM9GONNA9STEAL9ALL9YOUR9IOTAS9IF9YOU9USE9THIS9ONLINE9SEED9GENERATOR'
                  />
                </Grid.Row>
                <Grid.Row>
                  < CopyMenu />
                </ Grid.Row>
              </Grid.Column>
            </ Grid>
          </ Segment>
        </div>
      );
    }
  }

export default Seed;