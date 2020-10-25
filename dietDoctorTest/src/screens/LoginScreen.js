import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import NavigationBar from '../components/NavigationBar.js';
import LoginForm from '../components/LoginForm.js';
import { login } from '../api/authentication';
import loginStyle from '../styles/LoginStyle';

const backgroundImage = require('../assets/images/GeneralFadeScreenBg.png');
const nextButtonImage = require('../assets/images/nextBtn.png');

const LoginScreen = ({ navigation }) => {
  return (
    <View style={loginStyle.container}>
      <ImageBackground
        source={backgroundImage}
        style={loginStyle.ImageBackgroundStyle}>
        <NavigationBar
          leftIconName="keyboard-arrow-left"
          onLeftButtonPress={() => navigation.goBack()}
          title="Login"
          rightIcon="md-help-circle-outline"
        />
        <LoginForm
          buttonImage={nextButtonImage}
          onSubmit={login}
          onAuthentication={() => navigation.navigate('HomeScreen')}>
          <View>
            <Text style={loginStyle.forgotPasswordText}>Forgot Password</Text>
          </View>
        </LoginForm>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
