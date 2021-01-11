import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { colorsApp } from '@constants/colorsApp';

import store from '../redux/store';

import AppNavigator from './components/AppNavigator';

function App() {
  return (
    <>
      <StatusBar backgroundColor={colorsApp.primary} barStyle="light-content" />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
}

export default App;
