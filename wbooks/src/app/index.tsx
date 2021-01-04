import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

function App() {
  if (__DEV__) {
    const reactotron = require('../../reactotronConfig').default;
    reactotron.initiate();
    reactotron.console.tron.log('Hola mundo');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider store={store}>
          <View>
            <Text>Inicio</Text>
          </View>
        </Provider>
      </SafeAreaView>
    </>
  );
}

export default App;
