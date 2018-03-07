import React, { Component } from 'react';
//import  { Grid } from 'semantic-ui-react';

class CopyMenu extends Component {

    render() {
      return (
        <div className="CopyMenu">
          <i class="print icon large"></i>
          <i class="copy icon large"></i>
          <i class="qrcode icon large"></i>
        </div>
      );
    }
  }

export default CopyMenu;