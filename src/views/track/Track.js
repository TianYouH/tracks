import React, { Component } from 'react';
import ConnectGridContainer from './components/grid-container/ConnectGridContainer';
import GridFormContainer from './components/GridFormContainer';
import ConnectBricksContainer from './components/bricks-container/ConnectBricksContainer';
import TracksContainer from './components/TracksContainer';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: 'flex' }} >
        <section id='grid-container' style={{ width: '300px', marginRight: '50px' }} >
          <ConnectGridContainer></ConnectGridContainer>
          <GridFormContainer></GridFormContainer>
        </section>
        <ConnectBricksContainer></ConnectBricksContainer>
        <TracksContainer></TracksContainer>
      </div>
    );
  }
}

export default Track;
