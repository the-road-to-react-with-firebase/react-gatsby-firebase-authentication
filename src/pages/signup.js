import React from 'react';

import SignUpForm from '../components/SignUp';
import Layout from '../components/layout';

const SignUpPage = (history) => (
  <Layout>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </Layout>
);

export default SignUpPage;
