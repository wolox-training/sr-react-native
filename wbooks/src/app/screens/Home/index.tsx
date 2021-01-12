import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Animated, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routesName } from '@constants/routesName';
import noneBook from '@assets/books/noneBook.png';
import BookService from '@services/BookService';
import Book from '@interfaces/book';

import styles from './styles';

function HomeScreen() {
  const navigation = useNavigation();
  const [book, setBook] = useState<Book[]>([]);
  const [animation] = useState(new Animated.Value(0));
  const keyExtractor = (item: Book) => item.id.toString();

  useEffect(() => {
    (async () => {
      const res = await BookService.getService();
      setBook(res.data!);
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      }).start();
    })();
  }, [animation]);

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
      <FlatList keyExtractor={keyExtractor} data={book} renderItem={renderItem} />
    </View>
  );
}

export default HomeScreen;
