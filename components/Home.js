import React from 'react';
import {SafeAreaView, Image, View} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  Text,
  TopNavigation,
  Avatar,
} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const HomeScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <TopNavigation title="Shit Ive Done" alignment="center" /> */}
      <Divider />
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <View style={{flex: 1}} /> */}
        <View style={{paddingVertical: 30}}>
          <Avatar
            source={require('../assets/logo.png')}
            shape="square"
            style={{width: 200, height: 300, resizeMode: 'contain'}}
          />
        </View>
        <View
          style={{
            // flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#445BF4',
          }}>
          <TouchableOpacity onPress={navigateDetails}>
            <Image
              style={{height: 100, width: 200, resizeMode: 'contain'}}
              source={require('../assets/smiley.png')}
            />
            <Text style={{textAlign: 'center'}} category="h1">
              add shit
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Divider /> */}
        {/* <Button onPress={navigateDetails}>Add Shit</Button> */}
      </Layout>
    </SafeAreaView>
  );
};
