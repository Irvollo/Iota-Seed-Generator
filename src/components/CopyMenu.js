import React, { Component } from 'react';
import  {  Modal, Header, Button }  from 'semantic-ui-react';

class CopyMenu extends Component {

    render() {
      return (
        <div className="CopyMenu">
            <Modal 
              trigger={<i className="print icon large"></i>} 
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
            <i className="copy icon large"></i>
            <i className="qrcode icon large"></i>
        </div>
      );
    }
  }

export default CopyMenu;