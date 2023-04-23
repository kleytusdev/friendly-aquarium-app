import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES, COLORS } from '../constants';
import Home from '../pages/home/Home'
import Category from '../pages/category/Category'
import Product from '../pages/product/Product'
import Profile from '../pages/profile/Profile'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === ROUTES.HOME_TAB){
            iconName = focused ? "home" : 'home-outline';
          } else if (route.name === ROUTES.CATEGORY_TAB){
            iconName = focused ? "home" : 'home-outline';
          } else if (route.name === ROUTES.PRODUCT_TAB){
            iconName = focused ? "home" : 'home-outline';
          } else if (route.name === ROUTES.PROFILE_TAB){
            iconName = focused ? "home" : 'home-outline';
          }
          return <Ionicons name={iconName} size={20} color={color} /> 
        }
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home}/>
      <Tab.Screen name={ROUTES.CATEGORY_TAB} component={Category} />
      <Tab.Screen name={ROUTES.PRODUCT_TAB} component={Product} />
      <Tab.Screen name={ROUTES.PROFILE_TAB} component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    elevation: 0
  }
})