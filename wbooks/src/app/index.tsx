import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import actionCreators from '@redux/books/actions';

import store from '../redux/store';

function App() {
  // eslint-disable-next-line no-console
  console.tron.log('Hello world!!!');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider store={store}>
          <BooksScreen />
        </Provider>
      </SafeAreaView>
    </>
  );
}

function BooksScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.detailBookAction('harry potter'));
  }, [dispatch]);

  return (
    <View>
      <Text>Books Screen</Text>
    </View>
  );
}

export default App;
