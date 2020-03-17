import React from 'react';
import { FirebaseContext } from '../Firebase'

export default function AdminPage () {
  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <div>
          <h1>AdminPage</h1>
          <p>I have access to firebase.</p>
        </div>
      )}
    </FirebaseContext.Consumer>
  );
}
