import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
    Layout,
  Button,
  Text,
} from '@ui-kitten/components';

export default function FirebaseLogin() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signInAnon = () => {
      auth()
        .signInAnonymously()
        .then(() => {
            console.log('User signed in anonymously');
        })
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
            }

    console.error(error);
  });}

  if (initializing) return null;

  if (user) {
    return (
      <Layout>
        <Button onPress={()=>{}}>Login</Button>
      </Layout>
    );
  }

  return (
    <Layout>
      <Text>Welcome {user.email}</Text>
    </Layout>
  );
}