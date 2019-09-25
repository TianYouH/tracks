import React, { Component } from 'react';
import GridContainer from './components/GridContainer';
import GridFormContainer from './components/GridFormContainer';
import BricksContainer from './components/BricksContainer';
import TracksContainer from './components/TracksContainer';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <GridContainer></GridContainer>
        <GridFormContainer></GridFormContainer>
        <BricksContainer></BricksContainer>
        <TracksContainer></TracksContainer>
      </div>
    );
  }
}

export default Track;
