import React, { Component } from 'react';
import { navigate, Link } from '@reach/router';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            navigate(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event =>
            this.setState(updateByPropertyName('username', event.target.value))
          }
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event =>
            this.setState(updateByPropertyName('email', event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event =>
            this.setState(
              updateByPropertyName('passwordOne', event.target.value)
            )
          }
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event =>
            this.setState(
              updateByPropertyName('passwordTwo', event.target.value)
            )
          }
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export { SignUpForm, SignUpLink };

const SignUpPage = () => (
  <>
    <h1>SignUp</h1>
    <SignUpForm />
  </>
);

export default SignUpPage;
