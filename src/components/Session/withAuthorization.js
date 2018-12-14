import React from 'react';
import { navigate } from 'gatsby';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    _initFirebase = false;

    firebaseInit = () => {
      if (this.props.firebase && !this._initFirebase) {
        this._initFirebase = true;

        this.listener = this.props.firebase.onAuthUserListener(
          authUser => {
            if (!condition(authUser)) {
              navigate(ROUTES.SIGN_IN);
            }
          },
          () => navigate(ROUTES.SIGN_IN),
        );
      }
    };

    componentDidMount() {
      this.firebaseInit();
    }

    componentDidUpdate() {
      this.firebaseInit();
    }

    componentWillUnmount() {
      this.listener && this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithAuthorization);
};

export default withAuthorization;
