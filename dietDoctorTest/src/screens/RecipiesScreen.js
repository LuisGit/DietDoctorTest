import React from 'react';
import { View, Text } from 'react-native';
import NavigationBar from '../components/NavigationBar';

const RecipiesScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar
        leftIconName="keyboard-arrow-left"
        onLeftButtonPress={() => {}}
        title="Login"
        rightIcon="md-help-circle-outline"
      />
    </View>
  );
};

export default RecipiesScreen;
