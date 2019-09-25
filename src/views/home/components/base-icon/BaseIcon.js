import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IsURL } from '../../utils/validate';
import './base-icon.scss';

/**
 * 模版示例组建
 */
export default class BaseIcon extends Component {
  static propTypes = {
    // 组件 大小自适应，盒子和字体大小由父组件直接样式表定义
    // 在组件外定义 class，传递 class 到子组件内。避免直接传递 style 内连到标签上。
    name: PropTypes.string,
    bgColor: PropTypes.string,
    fontColor: PropTypes.string
  }

  static defaultProps = {
    name: 'iconjiangpai',
    bgColor: 'red',
    fontColor: '#fff'
  }

  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  renderIcon(name) {
    if (IsURL(name)) {
      return (
        <img src={name} />
      );
    } else {
      const { fontColor } = this.props;
      return (
        <i style={{ color: fontColor }} className={`iconfont ${name}`} />
      );
    }
  }

  render() {
    const { name, bgColor } = this.props;
    return (
      <div className='base-icon'>
        <div className='icon-box' style={{ backgroundColor: bgColor }}>
          {this.renderIcon(name)}
        </div>
      </div>
    );
  }
}
