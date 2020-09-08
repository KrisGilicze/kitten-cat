import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Avatar,
  Button,
  Layout,
  Popover,
  Text,
  Icon,
} from '@ui-kitten/components';

export const PopoverStyledBackdropShowcase = (props) => {
  const [visible, setVisible] = React.useState(false);

  const renderItemIcon = (props) => <Icon {...props} name="plus-outline" />;

  const renderToggleButton = () => (
    <Button onPress={() => setVisible(true)} accessoryLeft={renderItemIcon}>
      ADD
    </Button>
  );

  return (
    <Popover
      backdropStyle={styles.backdrop}
      visible={visible}
      anchor={renderToggleButton}
      //   fullWidth={true}
      style={{marginRight: 10, width: '150%'}}
      onBackdropPress={() => setVisible(false)}>
      <Layout style={styles.content}>
        <Avatar style={styles.avatar} source={require('../assets/logo.png')} />
        <Text>Welcome to UI Kitten 😻</Text>
      </Layout>
    </Popover>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  avatar: {
    marginHorizontal: 4,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
