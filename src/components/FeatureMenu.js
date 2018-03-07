import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react'

class FeatureMenu extends Component {

    render() {
      return (
        <div className="Features">
            <Grid columns={3}>
                <Grid.Column>
                <Segment basic>
                    <Header>Fast</Header>
                    <i className="lightning icon large"></i>
                    <br/>
                    <p className="FeatureDesc">Every seed you generate is created in seconds.</p>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment basic>
                    <Header>Secure</Header>
                    <i className="lock icon large"></i>
                    <br/>
                    <p className="FeatureDesc">Every seed is generated with advanced cryptographic functions.</p>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment basic>
                <Header>Free</Header>
                <i className="dollar icon large"></i>
                    <br/>
                    <p className="FeatureDesc">This Online Generator is 100% free and will always stay free.</p>
                </Segment>
                </Grid.Column>
            </Grid>
        </div>
      );
    }
  }

export default FeatureMenu;