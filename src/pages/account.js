import React from 'react';

import Layout from '../components/Layout';
import AuthUserContext from '../components/Session/AuthUserContext';
import PasswordForgetForm from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import withAuthorization from '../components/Session/withAuthorization';

const AccountPageBase = () => (
  <React.Fragment>
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  </React.Fragment>
);

const authCondition = authUser => !!authUser;

const AccountPage = withAuthorization(authCondition)(AccountPageBase);

export default () => (
  <Layout>
    <AccountPage />
  </Layout>
);
