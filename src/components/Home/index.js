import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

const fromObjectToList = object =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: fromObjectToList(snapshot.val()) }))
    );
  }

  componentWillUnmount() {
    db.detachHomepageListener();
  }

  render() {
    const { users } = this.state;

    return (
      <HomePageContent users={users} />
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of App User IDs (Saved on Sign Up in Firebase Database)</h2>
    {users.map(user => <div key={user.index}>{user.index}</div>)}
  </div>
);

const authCondition = authUser => !!authUser;

const HomePageContent = withAuthorization(authCondition)(users => (
  <div>
    <h1>Home</h1>
    <p>The Home Page is accessible by every signed in user.</p>

    {!!users.length && <UserList users={users} />}
  </div>
));

export default HomePage;
