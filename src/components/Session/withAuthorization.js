import React from 'react';
import { navigate } from 'gatsby';

import * as routes from '../../constants/routes';
import AuthUserContext from '../Session/AuthUserContext';
import { withFirebase } from '../Firebase/FirebaseContext';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        initFirebase: false,
        authUser: null,
      };
    }

    firebaseInit = () => {
      if (this.props.firebase && !this.state.initFirebase) {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
          if (!condition(authUser)) {
            navigate(routes.SIGN_IN);
          }
        });

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
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithAuthorization);
};

export default withAuthorization;
