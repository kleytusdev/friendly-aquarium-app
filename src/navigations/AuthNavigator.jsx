import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/auth/Login';
import Welcome from '../pages/start/Welcome';
import { ROUTES, COLORS } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor:COLORS.white,
      },
      headerTitleAlign: 'center',
     }} initialRouteName={ROUTES.WELCOME}>

      <Stack.Screen options={{headerShown: false}} name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.WELCOME} component={Welcome} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.HOME} component={BottomTabNavigator} />
      <Stack.Screen name={ROUTES.CATEGORY} component={BottomTabNavigator} />
      <Stack.Screen name={ROUTES.PRODUCTS} component={BottomTabNavigator} />
      <Stack.Screen name={ROUTES.PROFILE} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}