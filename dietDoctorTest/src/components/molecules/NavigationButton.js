import React from 'react';
import { Icon } from 'react-native-elements';

const NavigationButton = (props) => {
  return (
    <Icon
      size={36}
      color="#fff"
      name={props.iconName}
      onPress={() => props.onButtonPress()}
    />
  );
};

export default NavigationButton;
