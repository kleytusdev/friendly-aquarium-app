import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Components
import MiniCardCategory from "../components/MiniCardCategory";
// Screens
import FishScreen from "../screens/FishScreen";
import FoodScreen from "../screens/FoodScreen";
import AccesoryScreen from "../screens/AccesoryScreen";

const Tab = createMaterialTopTabNavigator();

const CategoryNavigator = () => {

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: "white",
            borderRadius: 40,
          },
          tabBarStyle: {
            shadowColor: 'transparent',
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: ({ color, focused }) => (
                <MiniCardCategory name="Peces" focused={focused} />
            ),
          }}
          name="FishScreen"
          component={FishScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ color, focused }) => (
                <MiniCardCategory name="Alimentos" focused={focused} />
            ),
          }}
          name="FoodScreen"
          component={FoodScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ color, focused }) => (
                <MiniCardCategory name="Accesorios" focused={focused} />
            ),
          }}
          name="AccesoryScreen"
          component={AccesoryScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default CategoryNavigator;
