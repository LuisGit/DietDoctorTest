import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

import PropTypes from 'prop-types';
import NavigationButton from './molecules/NavigationButton';

const propTypes = {
  title: PropTypes.string,
  left: PropTypes.node,
  leftIcon: PropTypes.string,
  onLeftButtonPress: PropTypes.func,
  right: PropTypes.node,
  rightIcon: PropTypes.string,
  onRightButtonPress: PropTypes.func,
  leftIconStyle: PropTypes.object,
  rightIconStyle: PropTypes.object,
};

const defaultProps = {
  title: '',
  left: null,
  leftIcon: '',
  onLeftButtonPress: null,
  right: null,
  rightIcon: 'md-more',
  onRightButtonPress: null,
  leftIconStyle: null,
  rightIconStyle: null,
};

const generateIconButton = (icon, onPress, iconStyle) => (
  <NavigationButton iconName={icon} onButtonPress={onPress} />
);

const NavigationBar = (props) => {
  const {
    title,
    leftIconName,
    onLeftButtonPress,
    right,
    rightIcon,
    onRightButtonPress,
    leftIconStyle,
    rightIconStyle,
    transparent,
  } = props;

  let leftComponent = null;
  let rightComponent = null;
  const showLeftComponent = leftIconName && onLeftButtonPress;
  const showRightComponent = !!right || (rightIcon && !!onRightButtonPress);
  const bodyColor = transparent ? 'transparent' : 'transparent';

  if (showLeftComponent) {
    leftComponent = generateIconButton(
      leftIconName,
      onLeftButtonPress,
      leftIconStyle,
    );
  }

  if (showRightComponent) {
    rightComponent =
      right ||
      generateIconButton(rightIcon, onRightButtonPress, rightIconStyle);
  }

  return (
    <Header
      leftComponent={leftComponent}
      centerComponent={{ text: title, style: styles.title }}
      rightComponent={rightComponent}
      containerStyle={[styles.containerStyle, { backgroundColor: bodyColor }]}
    />
  );
};

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;

export default NavigationBar;

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerStyle: {
    borderBottomColor: 'transparent',
    paddingTop: 0,
    height: 60,
  },
});
