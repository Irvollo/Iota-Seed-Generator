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
              <Modal.Header>STOP!</Modal.Header>
              <Modal.Content >
                <Modal.Description>
                  <Header>IOTA Online Seed Generators are unsecure, please don't use this seed under any circumstance</Header>
                  <p>Using Online seed generators had result in over $4M USD stolen in the past</p>
                  <p>This are some secure alternatives to generate your seed offline</p>
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