import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { getToken } from '../api/token';
import InitialLoadingStyle from '../styles/InitialLoadingStyle';

const backgroundImage = require('../assets/images/LaunchScreen.png');

class InitialLoading extends Component {
  constructor(props) {
    super(props);
    this.getToken = this.getToken.bind(this);
  }

  componentDidMount() {
    this.getToken();
  }

  async getToken() {
    const { navigation } = this.props;
    const token = await getToken();
    if (token) {
      navigation.navigate('HomeScreen');
    } else {
      navigation.navigate('LandingScreen');
    }
  }

  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={InitialLoadingStyle.ImageBackgroundStyle}
      />
    );
  }
}

export default InitialLoading;
