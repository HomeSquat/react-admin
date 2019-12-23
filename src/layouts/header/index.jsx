import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Button, Icon } from 'antd';
import * as common from '@/store/modules/common/action.js';
import './index.less';

class Header extends PureComponent {
  render() {
    let { collapsed, toggleCollapsed } = this.props
    return (
      <Layout.Header
        className="header">
        <Button
          className="collapsed-button"
          type="link"
          onClick={toggleCollapsed}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
      </Layout.Header>
    )
  }
}

const mapStateProps = state => ({
  collapsed: state.getIn(['common', 'collapsed'])
})

const mapDispatch = (dispatch) => ({
  toggleCollapsed() {
    dispatch(common.toggleCollapsed())
  }
})

export default connect(mapStateProps, mapDispatch)(Header)