import React, { Fragment } from 'react';
import { compose } from 'recompose';

import Layout from '../components/layout';
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
import { UserList } from '../components/Users';
import * as ROLES from '../constants/roles';

const AdminPageBase = () => (
  <Fragment>
    <h1>Admin</h1>
    <p>The Admin Page is accessible by every signed in admin user.</p>

    <UserList />
  </Fragment>
);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

const AdminPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(AdminPageBase);

export default () => (
  <Layout>
    <AdminPage />
  </Layout>
);
