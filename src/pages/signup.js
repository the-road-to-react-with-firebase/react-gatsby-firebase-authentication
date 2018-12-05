import React, { Fragment } from 'react';

import Layout from '../components/layout';
import SignUpForm from '../components/SignUp';

const SignUpPage = () => (
  <Fragment>
    <h1>SignUp</h1>
    <SignUpForm />
  </Fragment>
);

export default () => (
  <Layout>
    <SignUpPage />
  </Layout>
);
