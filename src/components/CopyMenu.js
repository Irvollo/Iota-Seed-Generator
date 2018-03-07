import React, { Component } from 'react';
import  {  Modal }  from 'semantic-ui-react';

class CopyMenu extends Component {

    render() {
      return (
        <div className="CopyMenu">
            <Modal
                style={{ marginTop: '4rem', marginRight:'1rem', marginRight:'1rem' }}
                trigger={<i className="print icon large"></i>}
                header='Reminder!'
                content='Call Benjamin regarding the reports.'
                actions={[
                'Snooze',
                { key: 'done', content: 'Done', positive: true },
                ]}
            />
            <i className="copy icon large"></i>
            <i className="qrcode icon large"></i>
        </div>
      );
    }
  }

export default CopyMenu;