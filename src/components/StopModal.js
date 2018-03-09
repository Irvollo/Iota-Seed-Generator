import React, { Component } from 'react';
import  {  Modal, Header, Message }  from 'semantic-ui-react';
import Generators from './Generators'

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
                  <p>This are some secure alternatives to generate your seed offline:</p>
                  <Generators />
                  <Message >
                    <p> Hey! If this helped you how about sending a  
                      <span role="img" aria-label="Coffe"> ☕ </span>  (1 MIOTA) to this Address and support the dev:
                      <b> GXNMVRWJSFMGKOVCMOGICITNYUDKOJMSZTMTQOCVAKSPBHSDP9PIGCGFSMSFNPBNMKREUOOFQR9FUZUL9QGSVQKDUX</b>
                    </p>
                  </Message>
                </Modal.Description>
              </Modal.Content>
        </Modal>
      );
    }
  }

export default StopModal;