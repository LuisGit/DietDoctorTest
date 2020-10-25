import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Routes from './navigation/Routes';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import appStyle from './styles/AppStyle';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.container}>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

export default App;
