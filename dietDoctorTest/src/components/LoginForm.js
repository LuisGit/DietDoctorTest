import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Overlay } from 'react-native-elements';
import { setToken } from '../api/token';
import formStyle from '../styles/LoginForm';

const errorMessage = require('../assets/images/EmailError.png');

const LoginForm = ({ buttonImage, onSubmit, children, onAuthentication }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const submit = async () => {
    const data = await onSubmit(email, password);
    if (data === 'Error') {
      Alert.alert(
        // Shows up the alert without redirecting anywhere
        'Error',
        'Email or password incorrect, try again!',
        [
          {
            text: 'Accept',
          },
        ],
      );
    } else {
      await setToken(data.token);
      onAuthentication();
    }
  };

  return (
    <ScrollView contentContainerStyle={formStyle.container}>
      <TextInput
        style={formStyle.input}
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        keyboardType="email-address"
        placeholder="Email address"
      />
      <TextInput
        style={formStyle.input}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity activeOpacity={0.8} onPress={submit}>
        <Image style={formStyle.buttonImageStyle} source={buttonImage} />
      </TouchableOpacity>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {children}
      <Overlay isVisible={showOverlay} onBackdropPress={toggleOverlay}>
        <Image style={formStyle.errorImage} source={errorMessage} />
      </Overlay>
    </ScrollView>
  );
};

export default LoginForm;
