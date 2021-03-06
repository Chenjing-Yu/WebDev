import app from 'firebase/app';
import 'firebase/auth';

const fbConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

class Firebase {
  constructor() {
    app.initializeApp(fbConfig);

    this.auth = app.auth();

  }

  /*Auth API*/
  createUserWithEmailAndPassword = (email, pwd) =>
    this.auth.createUserWithEmailAndPassword(email, pwd);

  signInWithEmialAndPassword = (email, pwd) =>
    this.auth.signInWithEmailAndPassword(email, pwd);

  signOut = () => this.auth.signOut();

  resetPassword = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;
