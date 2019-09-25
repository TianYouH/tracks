import React, { Component } from 'react';
import { List, Typography } from 'antd';

class TracksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBrickClick(event) {
    console.log('砖块被点击', event);
  }

  render() {
    const data = [
      'huang',
      'jin',
      'liang'
    ];
    return (
      <section id='tracks-container' style={{ width: '300px' }} >
        <List
          header={<div>存储路径</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>Load-</Typography.Text> {item}
            </List.Item>
          )}
        />
      </section>
    );
  }
}

export default TracksContainer;
