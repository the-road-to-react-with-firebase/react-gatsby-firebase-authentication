import React from 'react';
import { Router } from '@reach/router';

import * as routes from '../constants/routes';
import Layout from '../components/layout';
import Home from '../components/Home';
import Account from '../components/Account';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import PasswordForget from '../components/PasswordForget';

const NotFound = () => <p>Sorry, nothing here</p>;

const App = () => (
  <Layout>
    <Router>
      <Home path={routes.HOME} />
      <Account path={routes.ACCOUNT} />
      <PasswordForget path={routes.PASSWORD_FORGET} />
      <SignIn path={routes.SIGN_IN} />
      <SignUp path={routes.SIGN_UP} />
      <NotFound default />
    </Router>
  </Layout>
);

export default App;
