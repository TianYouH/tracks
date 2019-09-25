import React, { Component } from 'react';

class BricksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBrickClick(event) {
    console.log('砖块被点击', event);
  }

  render() {
    return (
      <section id='bricks-container' style={{ width: '100px', marginRight: '50px' }} >
        <form>
          <button onClick={this.onBrickClick} type='button' id='square-brick' >方形</button>
          <button onClick={this.onBrickClick} type='button' id='triangle-brick' >三角</button>
          <button onClick={this.onBrickClick} type='button' id='circle-brick' >圆形</button>
          <button onClick={this.onBrickClick} type='button' id='curve-brick' >扇形</button>
        </form>
      </section>
    );
  }
}

export default BricksContainer;
