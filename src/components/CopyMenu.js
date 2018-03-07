import React, { Component } from 'react';
//import  {  Modal, Header, Button }  from 'semantic-ui-react';
import StopModal from './StopModal'

class CopyMenu extends Component {

    render() {
      return (
        <div className="CopyMenu">
            <StopModal icon="copy" />
            <StopModal icon="qrcode" />
            <StopModal icon="print" />
        </div>
      );
    }
  }

export default CopyMenu;