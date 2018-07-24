import React from 'react';

import SignInForm from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';
import Layout from '../components/layout';

const SignInPage = () => (
  <Layout>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </Layout>
);

export default SignInPage;
