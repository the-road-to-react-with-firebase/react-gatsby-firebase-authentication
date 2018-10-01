import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import PasswordForgetForm from '../components/PasswordForget';

const PasswordForgetPage = () => (
  <Fragment>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </Fragment>
);

export default () => (
  <Layout>
    <PasswordForgetPage />
  </Layout>
);
