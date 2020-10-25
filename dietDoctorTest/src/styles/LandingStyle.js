import { StyleSheet } from 'react-native';

const LandingStyles = StyleSheet.create({
  constainerView: {
    flex: 1,
  },
  ImageBackgroundStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '110%',
  },
  buttonImageStyle: {
    width: 390,
    height: 45,
    resizeMode: 'contain',
  },
  loginButtonsContainer: {
    height: '17%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 80,
  },
});

export default LandingStyles;
