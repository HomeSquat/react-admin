import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import Sidebar from './sidebar';
import homePage from '@/pages/home';
import './index.less';

class Layout extends PureComponent {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <main>
          <Switch>
            <Route path="/app/main" exact component={Dashboard} />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

// const mapStateProps = state => ({

// })

export default connect(null,null)(Layout)