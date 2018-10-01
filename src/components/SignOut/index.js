import React from 'react';

import { withFirebase } from '../Firebase/FirebaseContext';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
