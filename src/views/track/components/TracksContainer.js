import React, { Component } from 'react';

class TracksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBrickClick(event) {
    console.log('砖块被点击', event);
  }

  render() {
    return (
      <section id='tracks-container' style={{ width: '300px' }} >
        <h1>存储路径</h1>
      </section>
    );
  }
}

export default TracksContainer;
