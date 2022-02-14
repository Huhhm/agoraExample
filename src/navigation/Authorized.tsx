import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import ClassScreen from '../screens/Class';
import ScreenRoutes from './routes';
import ChooseStudent from '../screens/ChooseStudent';

type Props = {};

const Stack = createStackNavigator();

const Authorized: React.FC<Props> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenRoutes.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={ScreenRoutes.CHOOSE_STUDENT}
        component={ChooseStudent}
      />
      <Stack.Screen name={ScreenRoutes.CLASS} component={ClassScreen} />
    </Stack.Navigator>
  );
};

export default Authorized;
