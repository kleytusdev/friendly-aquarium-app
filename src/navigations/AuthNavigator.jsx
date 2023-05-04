import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Welcome from '../pages/start/Welcome';
import ProductScreen from '../pages/home/screens/ProductScreen';
import ProductsQueue from '../pages/home/screens/ProductsQueue';
import PurcharseScreen from '../pages/home/screens/PurcharseScreen'
import { ROUTES, COLORS } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor:COLORS.background,
        elevation: 0,
      },
      headerTintColor: COLORS.white,
      headerTitle: '',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 17,
        fontFamily: "Poppins-Medium",
      },

    }} initialRouteName={ROUTES.WELCOME}>

      <Stack.Screen options={{headerShown: false}} name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.PRODUCT} component={ProductScreen} />
      <Stack.Screen options={{ headerTitle: 'Carrito de compras' }} name={ROUTES.PRODUCTQUEUE} component={ProductsQueue} />
      <Stack.Screen options={{ headerTitle: 'Resumen de pedido' }} name={ROUTES.PURCHARSE} component={PurcharseScreen} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.WELCOME} component={Welcome} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.HOME} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}