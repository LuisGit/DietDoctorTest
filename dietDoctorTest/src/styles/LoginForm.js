import { StyleSheet } from 'react-native';

const LoginForm = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 260,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  buttonImageStyle: {
    width: 390,
    height: 45,
    resizeMode: 'contain',
  },
});

export default LoginForm;
