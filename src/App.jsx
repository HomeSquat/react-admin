import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layouts';
import errorPage from '@/pages/error';
import loginPage from '@/pages/login';
import '@/assets/css/index.less';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact render={() => <Redirect to="/app/main"/>}></Route>

          {/* <Route path="/app" exact component={loginPage}></Route> */}
          <Route path="/login" exact component={loginPage}></Route>
          <Route path="/error" exact component={errorPage}></Route>

        </Switch>
        
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
