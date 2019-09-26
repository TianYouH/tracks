import React, { Component } from 'react';
import { List, Typography } from 'antd';
import PropTypes from 'prop-types';

class TracksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    trackList: PropTypes.array,
    loadTrack: PropTypes.func
  };

  render() {
    const { trackList, loadTrack } = this.props;
    return (
      <section id='tracks-container' style={{ width: '300px' }} >
        <List
          header={<div>存储路径</div>}
          bordered
          dataSource={trackList}
          renderItem={item => (
            <List.Item>
              <Typography.Text onClick={() => loadTrack(item.id)} underline>Load-</Typography.Text> {item.name}
            </List.Item>
          )}
        />
      </section>
    );
  }
}

export default TracksContainer;
