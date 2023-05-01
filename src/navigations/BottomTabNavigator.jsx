import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES, COLORS } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/home/Home'
import Favorites from '../pages/favorite/Favorite';
import Shopping from '../pages/shopping/Shopping';
import Profile from '../pages/profile/Profile'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.white,
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === ROUTES.HOME_TAB){
            iconName = focused ? "home" : 'home-outline';
          } else if (route.name === ROUTES.FAVORITE_TAB){
            iconName = focused ? "heart" : 'heart-outline';
          } else if (route.name === ROUTES.SHOPPING_TAB){
            iconName = focused ? "cart" : 'cart-outline';
          } else if (route.name === ROUTES.PROFILE_TAB){
            iconName = focused ? "person" : 'person-outline';
          }
          return <Ionicons name={iconName} size={20} color={color} /> 
        }
      })}
    >
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home}/>
      <Tab.Screen name={ROUTES.FAVORITE_TAB} component={Favorites} />
      <Tab.Screen name={ROUTES.SHOPPING_TAB} component={Shopping} />
      <Tab.Screen name={ROUTES.PROFILE_TAB} component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    paddingHorizontal: 30,
    backgroundColor: COLORS.background,
    borderTopWidth: 0,
  }
})