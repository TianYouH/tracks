import React from 'react';
import { Icon, Grid } from 'antd-mobile';
import PropTypes from 'prop-types';
import BaseIcon from '../base-icon/BaseIcon';
import './menu-cell.scss';

/**
 * 模版示例组建
 */
export default class MenuCell extends React.Component {
  static propTypes = {
    menu: PropTypes.object.isRequired
  }

  // static defaultProps = {
  //   name: 'iconjiangpai'
  // }

  constructor(props) {
    super(props);
    this.start = {
    };
    this.handelHeaderClick = this.handelHeaderClick.bind(this);
  }

  componentDidMount() {
    // console.log('21213213', this.props.menu);
  }

  handelHeaderClick() {
    // console.log('你好世界');
    window.location.href = this.props.menu.menuUrl;
  }

  handelGridClick(menu) {
    // console.log('你好银河', menu);
    window.location.href = menu.url;
  }

  render() {
    const { menuName, menuIcon, children } = this.props.menu;
    const data = []; // 子菜单集合，产品说最多4个
    for (let i = 0; i < 4; i++) {
      data.push({
        icon: children[i].menuIcon,
        text: children[i].menuName,
        url: children[i].menuUrl
      });
    }

    return (
      <div className='menu-cell'>
        <div className='menu-header' onClick={this.handelHeaderClick}>
          <div className='menu-header-left'>
            <BaseIcon name={menuIcon} bgColor='#06a8ff' />
            <span>{menuName}</span>
          </div>
          <Icon type='right' color='#eee' />
        </div>
        <Grid data={data}
          columnNum={4}
          hasLine={false}
          onClick={this.handelGridClick}
          renderItem={(dataItem) => (
            <div style={{ padding: '12.5px' }}>
              <BaseIcon name={dataItem.icon} bgColor='#fff' />
              <div style={{ color: '#888', fontSize: '14px' }}>
                <span>{dataItem.text}</span>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
