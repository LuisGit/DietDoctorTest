import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecipiesScreen from '../screens/RecipiesScreen';
import MealsScreen from '../screens/MealsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recipies" component={RecipiesScreen} />
      <Tab.Screen name="Meals" component={MealsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
