import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  Popover,
  Avatar,
  Calendar,
  Input,
} from '@ui-kitten/components';
import {ListAccessoriesShowcase} from './ShitList';
import {PopoverStyledBackdropShowcase} from './Popover';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const DetailsScreen = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const data = new Array(8).fill({
    title: "Shit I've done",
    description: 'Description for shit',
  });

  const [visible, setVisible] = useState(false);
  const [shitArray, setShitArray] = useState(data);
  const [valueTitle, setValueTitle] = useState('');
  const [valueDescription, setValueDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const addShit = (shitItem) => {
    setShitArray([...shitArray, shitItem]);
  };

  const renderItemIcon = (props) => <Icon {...props} name="plus-outline" />;

  const renderAddButton = () => (
    <Button
      style={styles.button}
      size="medium"
      status="danger"
      accessoryLeft={renderItemIcon}
      onPress={() => setVisible(true)}>
      ADD
    </Button>
  );

  const submitShit = () => {
    addShit({
      title: valueTitle,
      description: valueDescription,
    });
    setVisible(false);
  };

  return (
    <View style={{flex: 1, paddingTop: 33}}>
      <TopNavigation
        title="Shit List"
        appearance="default"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Layout style={styles.content}>
        <Divider />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            source={require('../assets/logo.png')}
            style={{paddingHorizontal: 30}}
          />
          <Text category="h5" style={{paddingHorizontal: 15}}>
            Done:
          </Text>
        </View>
        <Divider />
        <Popover
          backdropStyle={styles.backdrop}
          visible={visible}
          anchor={renderAddButton}
          fullWidth={true}
          onBackdropPress={() => setVisible(false)}>
          <View style={{padding: 20}}>
            <Avatar
              source={require('../assets/smiley.png')}
              size="giant"
              style={{marginBottom: 20, alignSelf: 'center'}}
            />
            <Text style={{paddingBottom: 10}}>I did:</Text>
            <Input
              // style={{width: 300}}
              style={{paddingBottom: 10}}
              status={'info'}
              value={valueTitle}
              onChangeText={(nextValue) => setValueTitle(nextValue)}
              placeholder="e.g. Staubsaugen"
            />
            <Text style={{paddingBottom: 10}}>Description:</Text>
            <Input
              // style={{width: 300}}
              style={{paddingBottom: 10}}
              value={valueDescription}
              placeholder="[optional]"
              onChangeText={(nextValue) => setValueDescription(nextValue)}
            />
            <Text category="h6">
              Selected date: {date.toLocaleDateString()}
            </Text>

            <Calendar
              style={{marginBottom: 20}}
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
            />
            <Button status="danger" onPress={submitShit}>
              SUBMIT
            </Button>
          </View>
        </Popover>
        <Divider />
        <Layout style={{flex: 1, alignItems: 'center'}}>
          <ListAccessoriesShowcase itemsArray={shitArray} />
        </Layout>
        <Divider />
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 2,
  },
  content: {
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 8,
    height: 400,
  },
  avatar: {
    marginHorizontal: 4,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
