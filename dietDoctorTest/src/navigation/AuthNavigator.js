import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InitialLoading from '../screens/InitialLoading';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="InitialLoading"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        defaultNavigationOptions: () => ({
          gesturesEnabled: false,
        }),
      })}>
      <Stack.Screen
        name="InitialLoading"
        component={InitialLoading}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
