import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import logoImg from '@/assets/image/logo.png';
import './index.less';

class Sidebar extends PureComponent {
  render() {
    let { collapsed } = this.props
    return (
      <Layout.Sider
        className="sidebar"
        width="256"
        trigger={null}
        collapsible
        collapsed={collapsed}
        >
        <div className="logo">
          <img src={logoImg} alt=""/>
        </div>
        <Menu
          className="menu"
          theme="dark"
          onClick={this.handleClick}
          defaultSelectedKeys={['4']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </Menu.SubMenu>
        </Menu>

      </Layout.Sider>
    )
  }
}

const mapStateProps = state => ({
  collapsed: state.getIn(['common','collapsed'])
})

export default connect(mapStateProps, null)(Sidebar)