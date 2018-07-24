import React from 'react';

import AuthUserContext from '../components/Session/AuthUserContext';
import { PasswordForgetForm } from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import withAuthorization from '../components/Session/withAuthorization';
import Layout from '../components/layout';

const AccountPage = () => (
  <Layout>
    <AccountPageContent />
  </Layout>
);

const authCondition = authUser => !!authUser;

const AccountPageContent = withAuthorization(authCondition)(() => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
));

export default AccountPage;
