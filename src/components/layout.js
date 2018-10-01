import React, { Component, Fragment } from 'react';

import Navigation from './Navigation';
import getFirebase from './Firebase';
import FirebaseContext from './Firebase/FirebaseContext';
import withAuthentication from './Session/withAuthentication';

class Layout extends Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0]);

      this.setState({ firebase });
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <AppWithAuthentication {...this.props} />
      </FirebaseContext.Provider>
    );
  }
}

const AppWithAuthentication = withAuthentication(props => (
  <Fragment>
    <Navigation />
    <hr />
    {props.children}
  </Fragment>
));

export default Layout;
