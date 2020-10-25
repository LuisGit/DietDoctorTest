import React from 'react';
import { Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getToken } from '../api/token';

import RecipiesScreen from '../screens/RecipiesScreen';
import MealsScreen from '../screens/MealsScreen';

const LogOutScreen = () => {};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Recipies') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Meals') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'Logout') {
            iconName = focused ? 'rocket' : 'rocket-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Recipies" component={RecipiesScreen} />
      <Tab.Screen
        name="Meals"
        component={MealsScreen}
        listeners={({ navigation, route }) => ({
          tabPress: async (e) => {
            const token = !!(await getToken());
            if (!token) {
              return Alert.alert(
                // Shows up the alert without redirecting anywhere
                'Login required',
                "You can't browse this section without sing in",
                [
                  {
                    text: 'Accept',
                    onPress: () => {
                      navigation.navigate('Recipies');
                    },
                  },
                ],
              );
            }
          },
        })}
      />
      <Tab.Screen
        name="Logout"
        component={LogOutScreen}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            return Alert.alert(
              // Shows up the alert without redirecting anywhere
              'Confirmation required',
              'Do you really want to logout?',
              [
                {
                  text: 'Accept',
                  onPress: () => {
                    navigation.navigate('LandingScreen');
                  },
                },
                { text: 'Cancel' },
              ],
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
