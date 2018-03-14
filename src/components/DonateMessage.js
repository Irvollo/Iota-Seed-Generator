import React, { Component } from 'react';
import  { Message }  from 'semantic-ui-react';

class DonationMessage extends Component {

    render() {
      return (
        <div className="DonateMessage">
            <Message>
                <p> Hey! If this helped you, how about sending a  
                <span role="img" aria-label="Coffe"> ☕ </span>  (1 MIOTA) to this Address and support the dev:
                <b> TSABRWZQKMTVDBFBFVQUYQLEOBEONIPLCEVRZEPUWR9HVZYTEZBPLEBFZFVILCYVNWZCPLFBEDGEMEYVBDOQWAINYW</b>
                </p>
            </Message>
        </div >
      );
    }
  }

export default DonationMessage;