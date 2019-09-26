import React, { Component } from 'react';
import { List, Typography } from 'antd';
import PropTypes from 'prop-types';

class TracksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onTrackClick = this.onTrackClick.bind(this);
  }

  static propTypes = {
    trackList: PropTypes.array,
    grid: PropTypes.object,
    store: PropTypes.object,
    loadTrack: PropTypes.func
  };

  // onTrackClick(id) {
  //   const { grid, store } = this.props;
  //   console.log('轨迹被点击', event);
  //   grid.bricks = store.getTrack(id);
  //   // draw();
  // }

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
