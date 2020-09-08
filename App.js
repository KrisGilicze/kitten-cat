import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './components/Navigator';
import {default as theme} from './themes/theme-yellow.json';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      {/* <ApplicationProvider {...eva} theme={eva.dark}> */}
      <AppNavigator />
    </ApplicationProvider>
  </>
);
