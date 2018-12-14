import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    _initFirebase = false;

    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    firebaseInit = () => {
      if (this.props.firebase && !this._initFirebase) {
        this._initFirebase = true;

        this.listener = this.props.firebase.onAuthUserListener(
          authUser => {
            localStorage.setItem(
              'authUser',
              JSON.stringify(authUser),
            );
            this.setState({ authUser });
          },
          () => {
            localStorage.removeItem('authUser');
            this.setState({ authUser: null });
          },
        );
      }
    };

    componentDidMount() {
      this.setState({
        authUser: JSON.parse(localStorage.getItem('authUser')),
      });

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
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
