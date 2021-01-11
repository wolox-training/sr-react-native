import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native';
import { useDispatch } from 'react-redux';
import bookAction from '@redux/books/actions';
import { routesName } from '@constants/routesName';
import noneBook from '@assets/books/noneBook.png';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

function HomeScreen({ navigation }: any) {
  const [books, setBooks] = useState(BOOKS_MOCK);
  const [animation] = useState(new Animated.Value(0));
  const dispatch = useDispatch();
  const keyExtractor = (item: any, index: number) => index.toString();

  useEffect(() => {
    setBooks(BOOKS_MOCK);
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [animation]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.containerList}
      onPress={() => {
        dispatch(bookAction.detailBookAction(item));
        navigation.navigate(routesName.bookDetail.route);
      }}>
      <Animated.Image
        style={[styles.logo, { opacity: animation }]}
        source={item.imageUrl ? { uri: item.imageUrl } : noneBook}
      />
      <Animated.View style={{ opacity: animation }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.publisher}</Text>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList keyExtractor={keyExtractor} data={books} renderItem={renderItem} />
    </View>
  );
}

export default HomeScreen;
