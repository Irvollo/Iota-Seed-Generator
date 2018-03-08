import React, { Component } from 'react';
import  { Input, Grid, Segment, Button } from 'semantic-ui-react';
import CopyMenu from './CopyMenu'

class Seed extends Component {
    
    constructor(props) {
      super(props);
      this.seeds = [
        "THIS9IS9NOT9REAL9AND9I9WILL9STEAL9ALL9YOUR9MONEY9BECAUSE9IM9A9HACKER9PLEASE9STOP9",
        "NOT9A9REAL9SEED9GENERATOR9PLEASE9GENERATE9YOUR9SEED9OFFLINE9IF9YOU9WANT9TO9BE9SAFE",
        "9THIS9SEED9WILL9BE9STORED9IN9MY9DATABASE9WHERE9I9WILL9STOLE9YOUR9FUNDS9LATER9XOXO",
        "9NEVER9USE9ONLINE9SEED9GENERATORS9NEVER9USE9ONLINE9SEED9GENERATORS9NEVER9USE9ONLI",
        "FYI9WE9HAVENT9GENERATED9ONE9HUNDREDTHOUSAND9SEEDS9BUT9BIG9NUMBERS9LOOK9MORE9LEGIT",
        "IF9THIS9GENERATOR9SAVE9YOU9OR9AT9LEAST9MADE9YOU9LAUGH9PLEASE9CONSIDER9A9DONATION9",
        "THIS9SEED9IS9MORE9FAKE9THAN9MIT9DCI9FUD9THIS9SEED9IS9MORE9FAKE9THAN9MIT9DCI9FUD",
        "9FOUR9MILLION9DOLLARS9HAD9BEEN9STOLEN9FROM9ONLINE9IOTA9SEED9GENEATORS9PLEASE9STOP"

      ];
      this.state = {
        actualSeed: "IM9A9SCAM9AND9IM9GONNA9STEAL9ALL9YOUR9IOTAS9IF9YOU9USE9THIS9ONLINE9SEED9GENERATOR"
      }
      this.getSeeds = this.getSeeds.bind(this);
    }

    getSeeds() {
      this.setState({
        actualSeed: this.seeds[Math.floor(Math.random() * this.seeds.length)]
      }, () => console.log(this.state.actualSeed)) 
      
    } 

    render() {
      return (
        <div className="Seed">
          <Segment
            style={{ marginLeft: '10%', width:'80%' }}
            color='teal'
          >
            <p> This is your new seed:</p>
            <Grid centered='true'>
              <Grid.Column width={14}>
                <Grid.Row>
                  <Input
                    focus
                    fluid
                    centered
                    value={this.state.actualSeed}
                  />
                </Grid.Row>
                <Grid.Row >
                  <div className="Refresh">
                    <Button color="teal" onClick={this.getSeeds}> New Seed </Button>
                  </ div>
                </ Grid.Row >
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