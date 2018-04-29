import React from 'react';
import {
  // BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SignUpPage from '../../components/SignUp';
import SignInPage from '../../components/SignIn';
import PasswordForgetPage from '../../components/PasswordForget';
import HomePage from '../../components/Home';
import AccountPage from '../../components/Account';
import withAuthentication from '../../components/Session/withAuthentication';
import * as routes from '../../constants/routes';

import './index.css';

const app = () =>
  <div>
    <div className="app">

      <hr/>

      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />

      <hr/>

      <span>Found in <a href="https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE">Taming the State in React</a></span> | <span>Star the <a href="https://github.com/rwieruch/react-firebase-authentication">Repository</a></span> | <span>Receive a <a href="https://www.getrevue.co/profile/rwieruch">Developer's Newsletter</a></span>
    </div>
  </div>

export default withAuthentication(app);
