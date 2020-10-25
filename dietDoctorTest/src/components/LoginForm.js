import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { setToken } from '../api/token';
import formStyle from '../styles/LoginForm';

const LoginForm = ({ buttonImage, onSubmit, children, onAuthentication }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    onChangeEmail('stas.testuser1@dietdoctor.com');
    onChangePassword('C5(Pg5qwrwP^(WJ!eS%d38FI');
  }, []);

  const submit = async () => {
    const data = await onSubmit(email, password);
    console.log(data.token);
    if (data === 'Error') {
      alert('Error!');
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
    </ScrollView>
  );
};

export default LoginForm;
