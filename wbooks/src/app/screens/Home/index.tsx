import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
  ListRenderItem,
  ActivityIndicator
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import actionBooks from '@redux/books/actions';
import { useNavigation } from '@react-navigation/native';
import { routesName } from '@constants/routesName';
import noneBook from '@assets/books/none_book.png';
import Book from '@interfaces/book';
import State from '@interfaces/reduxInterfaces';
import { colorsApp } from '@constants/colorsApp';

import styles from './styles';

function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { book } = useSelector((state: State) => state);
  const [animation] = useState(new Animated.Value(0));
  const keyExtractor = (item: Book) => item.id.toString();

  useEffect(() => {
    dispatch(actionBooks.getBooks());
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [dispatch, animation]);

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <TouchableOpacity
      style={styles.containerList}
      onPress={() => {
        navigation.navigate(routesName.bookDetail.route, { book: item });
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
      {book.booksLoading ? (
        <ActivityIndicator size="large" color={colorsApp.primary} />
      ) : (
        <FlatList keyExtractor={keyExtractor} data={book.books} renderItem={renderItem} />
      )}
    </View>
  );
}

export default HomeScreen;
