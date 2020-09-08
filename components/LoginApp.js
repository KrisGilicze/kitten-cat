import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
    ApplicationProvider,
    Button,
    Icon,
    IconRegistry,
    Layout,
    Text,
} from '@ui-kitten/components';

export default function LoginApp() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) {
            setInitializing(false);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    auth()
        .signInAnonymously()
        .then(() => {
            console.log('User signed in anonymously');
        })
        .catch((error) => {
            if (error.code === 'auth/operation-not-allowed') {
                console.log('Enable anonymous in your firebase console.');
            }

            console.error(error);
        });

    if (initializing) {
        return (
            <View>
                <Text>Initializing...</Text>
            </View>
        );
    }

    if (!user) {
        return (
            <View>
                <Text>Login</Text>
                <Button>Click Me</Button>
            </View>
        );
    }
    return (
        <View>
            <Text>Welcome, {user.email}</Text>
        </View>
    );
}
