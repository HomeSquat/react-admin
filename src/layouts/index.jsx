import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Sidebar, Header, Main } from './components';
import './index.less';

class LayoutAPP extends PureComponent {
  render() {
    let { collapsed } = this.props
    return (
      <Layout className={`app ${collapsed ? "collapsed":""}`}>
        <Sidebar/>
        <Layout className="right">
          <Header/>
          <Main/>
        </Layout>
      </Layout>
    )
  }
}

const mapStateProps = state => ({
  collapsed: state.getIn(['common', 'collapsed'])
})

export default connect(mapStateProps,null)(LayoutAPP)