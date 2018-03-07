import React, { Component } from 'react';
import  { Statistic, Segment }  from 'semantic-ui-react';

class FakeStats extends Component {

    render() {
      return (
        <div className="Stats">
            <Segment>
                <Statistic size="small">
                <Statistic.Value>+100k</Statistic.Value>
                <Statistic.Label>Seeds Generated</Statistic.Label>
                </Statistic>
            </ Segment >
        </ div >
      );
    }
  }

export default FakeStats;