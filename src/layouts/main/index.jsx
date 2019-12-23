import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Layout } from 'antd';
import homePage from '@/pages/home';
import './index.less';

class Main extends PureComponent {
  render() {
    return (
      <Layout.Content
        className="main">
        <Switch>
          <Route path="/app/home" exact component={homePage} />
        </Switch>
      </Layout.Content>
    )
  }
}

export default connect(null, null)(Main)