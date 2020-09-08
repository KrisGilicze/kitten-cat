// @flow
import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
    ApplicationProvider,
    Button,
    Icon,
    IconRegistry,
    Layout,
    Text,
    Divider,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import LoginApp from './components/LoginApp';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => <Icon {...props} name="heart" />;

export default function App(): Node {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.dark}>
                <Layout style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text} category="h2">
                            😻
                        </Text>
                        <Text style={styles.text} category="h2">
                            Welcome to
                        </Text>
                        <Image
                            source={require('./assets/logo.png')}
                            style={styles.logo}
                        />
                        <Divider />
                        <Button
                            style={styles.likeButton}
                            accessoryLeft={HeartIcon}>
                            LIKE
                        </Button>
                        <Divider />
                        <LoginApp />
                    </View>
                </Layout>
            </ApplicationProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    text: {
        textAlign: 'center',
    },
    likeButton: {
        marginVertical: 16,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        height: 200,
        width: 200,
    },
});
