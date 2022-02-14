import React, {FunctionComponent} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Authorized from './Authorized';

type Props = {};

const RootNavigation: FunctionComponent<Props> = () => {
  const theme = {
    ...DefaultTheme,
  };

  return (
    <NavigationContainer theme={theme}>
      <Authorized />
    </NavigationContainer>
  );
};

export default RootNavigation;
