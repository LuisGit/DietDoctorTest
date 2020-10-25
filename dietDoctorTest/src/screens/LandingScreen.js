import React from 'react';
import { View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import landingStyles from '../styles/LandingStyle';

const backgroundImage = require('../assets/images/LandingScreenBg.png');
const loginButton = require('../assets/images/loginBtn.png');
const skipButton = require('../assets/images/skipBtn.png');

const LandingScreen = ({ navigation }) => {
  const onLoginPress = () => {
    navigation.navigate('LoginScreen');
  };
  const onSkipPress = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={landingStyles.constainerView}>
      <ImageBackground
        source={backgroundImage}
        style={landingStyles.ImageBackgroundStyle}>
        <View style={landingStyles.loginButtonsContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => onLoginPress()}>
            <Image
              style={landingStyles.buttonImageStyle}
              source={loginButton}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => onSkipPress()}>
            <Image style={landingStyles.buttonImageStyle} source={skipButton} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingScreen;
