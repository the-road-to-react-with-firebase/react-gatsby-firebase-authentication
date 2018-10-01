import React, { Component } from 'react';

import Layout from '../components/Layout';
import withAuthorization from '../components/Session/withAuthorization';

const fromObjectToList = object =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePageBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initFirebase: false,
      users: [],
    };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this.state.initFirebase) {
      this.props.firebase.onceGetUsers().then(snapshot =>
        this.setState(() => ({
          users: fromObjectToList(snapshot.val()),
        })),
      );

      this.setState({ initFirebase: true });
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  render() {
    const { users } = this.state;

    return (
      <React.Fragment>
        <p>The Home Page is accessible by every signed in user.</p>

        {!!users.length && <UserList users={users} />}
      </React.Fragment>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>
      List of App User IDs (Saved on Sign Up in Firebase Database)
    </h2>
    {users.map(user => (
      <div key={user.index}>{user.index}</div>
    ))}
  </div>
);

const authCondition = authUser => !!authUser;

const HomePage = withAuthorization(authCondition)(HomePageBase);

export default () => (
  <Layout>
    <HomePage />
  </Layout>
);
