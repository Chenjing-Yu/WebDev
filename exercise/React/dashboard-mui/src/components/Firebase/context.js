import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = WrappedComponent => props => {
  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <WrappedComponent {...props} firebase={firebase}/>
      )}
    </FirebaseContext.Consumer>
  );
}

export default FirebaseContext;
