import React from 'react';
import { View, Text } from 'react-native';
import NavigationBar from '../components/NavigationBar';

const MealsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar
        leftIconName="keyboard-arrow-left"
        onLeftButtonPress={() => {}}
        title="Meals"
        rightIcon="md-help-circle-outline"
      />
    </View>
  );
};

export default MealsScreen;
