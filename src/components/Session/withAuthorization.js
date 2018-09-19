import React from 'react';
import { navigate } from "@reach/router";

import AuthUserContext from '../Session/AuthUserContext';
import { firebase } from '../../firebase';
import * as routes from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      if (typeof window !== 'undefined') {
        firebase.auth.onAuthStateChanged(authUser => {
          if (!condition(authUser)) {
            navigate(routes.SIGN_IN);
          }
        });
      }
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <Component {...this.props} /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return WithAuthorization;
};

export default withAuthorization;
