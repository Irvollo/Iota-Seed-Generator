import React, { Component } from 'react';
import  {  Modal, Header }  from 'semantic-ui-react';
import Generators from './Generators';
import DonateMessage from './DonateMessage';

class StopModal extends Component {

    constructor(props) {
        super(props);
        this.icon = props.icon;
      }

    render() {
      return (
        <Modal 
              trigger={<i className={`${this.icon} icon large`}></i>} 
              style={{ marginTop: '4rem', marginLeft: '10%', width:'75%' }}
              closeIcon
              >    
              <Modal.Header><Header color="red">STOP! <i className="tiny icon warning sign"></i></Header></Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>IOTA Online Seed Generators are unsecure, please don't use this seed under any circumstance.</Header>
                  <p>These are some secure alternatives to generate your seed offline:</p>
                  <Generators />
                  <DonateMessage />
                </Modal.Description>
              </Modal.Content>
        </Modal>
      );
    }
  }

export default StopModal;