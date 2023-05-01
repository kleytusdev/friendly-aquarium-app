import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Welcome from '../pages/start/Welcome';
import { ROUTES, COLORS } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor:COLORS.background,
        elevation: 0
      },
      headerTintColor: COLORS.white,
      headerTitle: '',
    }} initialRouteName={ROUTES.WELCOME}>

      <Stack.Screen options={{headerShown: false}} name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.WELCOME} component={Welcome} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.HOME} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}