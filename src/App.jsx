import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '@/layouts';
import { staticRoutes } from '@/routes';
import '@/assets/css/index.less';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact render={() => <Redirect to="/app/home"/>}></Route>
          <Route path="/app" exact render={() => <Redirect to="/app/home"/>}></Route>

          <Route path="/app" component={Layout}></Route>
          {
            staticRoutes.map(route => (
              <Route path={route.path} exact={route.exact} component={route.component}></Route>
            ))
          }

        </Switch>
        
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
