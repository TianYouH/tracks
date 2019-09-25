import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import moment from 'moment';
import { basicApi } from '../../api/index';
import './home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    console.log('组件已经挂载好', basicApi);
    // basicApi.GET_USERINFO_API().then(
    //   (res) => {
    //     if (res.status) {
    //       console.log('用户信息是', res.result);
    //       this.setState({
    //         menus: res.result.menus
    //       });
    //     }
    //   }
    // );
  }

  render() {
    return (
      <div id='home' className='container'>
        <NavBar>测试首页</NavBar>
        <p style={{ textAlign: 'center', color: '#cacace' }}> {moment().format('YYYY年MM月DD日')} </p>
      </div>
    );
  }
}
