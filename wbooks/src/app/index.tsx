import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { colorsApp } from '@constants/colorsApp';

import store from '../redux/store';

import styles from './styles';
import AppNavigator from './components/AppNavigator';

function App() {
  return (
    <>
      <StatusBar backgroundColor={colorsApp.primary} barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaView>
    </>
  );
}

export default App;
