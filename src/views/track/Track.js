import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConnectGridContainer from './components/grid-container/ConnectGridContainer';
import GridFormContainer from './components/GridFormContainer';
import ConnectBricksContainer from './components/bricks-container/ConnectBricksContainer';
import ConnectTracksContainer from './components/tracks-container/ConnectTracksContainer';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClearClick = this.onClearClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.loadTrack = this.loadTrack.bind(this);
  }

  static propTypes = {
    grid: PropTypes.object,
    store: PropTypes.object,
    updateTrackList: PropTypes.func
  }

  // 清空事件
  onClearClick() {
    const { grid } = this.props;
    console.log('清除被点击', this);
    grid.clear();
    this.refGridContainer.draw();
  }

  // 保存事件
  onSaveClick(trackName) {
    const { store, grid } = this.props;
    console.log('保存被点击');
    const trackID = store.saveTrack(grid.bricks);
    this.addTrackToList(trackID, trackName);
  }

  // 添加 保存轨迹列表
  addTrackToList(ID, name) {
    const { updateTrackList } = this.props;
    updateTrackList({
      id: ID,
      name
    });
  }

  // 读取轨迹
  loadTrack(id) {
    const { store, grid } = this.props;
    grid.bricks = store.getTrack(id);

    this.refGridContainer.draw();
  }

  render() {
    return (
      <div style={{ display: 'flex' }} >
        <section id='grid-container' style={{ width: '300px', marginRight: '50px' }} >
          <ConnectGridContainer onRef={(ref) => { this.refGridContainer = ref; } } ></ConnectGridContainer>
          <GridFormContainer
            onClearClick={this.onClearClick}
            onSaveClick={this.onSaveClick}
          ></GridFormContainer>
        </section>
        <ConnectBricksContainer></ConnectBricksContainer>
        <ConnectTracksContainer loadTrack={this.loadTrack} ></ConnectTracksContainer>
      </div>
    );
  }
}

export default Track;
