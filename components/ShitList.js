import React, {useEffect, useState} from 'react';
import {
  Button,
  Icon,
  List,
  ListItem,
  Divider,
  Calendar,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

export const ListAccessoriesShowcase = (Props) => {
  const renderItemAccessory = (props) => (
    <Button size="tiny" status="control">
      View shit
    </Button>
  );

  const {itemsArray} = Props;

  const [shitList, setShitList] = useState(itemsArray);
  useEffect(() => {
    setShitList(itemsArray);
    console.log('Whiat');
  }, [itemsArray]);

  const renderItemIcon = (props) => (
    <Icon {...props} name="smiling-face-outline" />
  );

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <List
      style={styles.container}
      containerStyle={styles.contStyle}
      data={shitList}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    maxHeight: '90%',
    width: '90%',
  },
  contStyle: {
    flex: 1,
  },
});
