import React, { Component } from 'react';
import  {  Modal, Header, Button }  from 'semantic-ui-react';

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
              >    
              <Modal.Header><Header color="red">STOP! <i className="tiny icon warning sign"></i></Header></Modal.Header>
              <Modal.Content >
                <Modal.Description>
                  <Header>IOTA Online Seed Generators are unsecure, please don't use this seed under any circumstance.</Header>
                  <p>Using Online seed generators had result in over <b>$4M</b> USD stolen in the past</p>
                  <p>This are some secure alternatives to generate your seed offline:</p>
                  <ul>
                      <a><li>Mac OSx Command Line</li></a>
                      <a><li>Linux Command Line</li></a>
                      <a><li>Dice</li></a>
                  </ul>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button positive icon='checkmark' labelPosition='center' content='Understood' />
              </Modal.Actions>
        </Modal>
      );
    }
  }

export default StopModal;