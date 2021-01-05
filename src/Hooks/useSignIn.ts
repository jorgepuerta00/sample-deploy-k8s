import * as React from 'react';
import firebase from './../Constants/firebase';

const UseSignIn = () => {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState<any>();
  const [token, setToken] = React.useState<string>("");
  const [error, setError] = React.useState<string>();

  const firebaseSignIn = async (username: string, password: string) => {
    try {
      setLoading(true)
      setError("")

      await firebase.auth().signInWithEmailAndPassword(username, password)
      .then((response: any) => {
        setToken(response.user.ya);
        setUser(response.user);
      }).catch((error: any) => {
        if (error != null) setError(error.message);
        else setError("Something went wrong. Please try again later.");
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false)
    }
  }

  return [loading, token, user, error, firebaseSignIn] as const;
}

export default UseSignIn