import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import noneBook from '@assets/books/noneBook.png';
import PrimaryButton from '@app/components/PrimaryButton';
import SecondaryButton from '@app/components/SecondaryButton';
import Book from '@interfaces/book';

import styles from './styles';

function BookDetailScreen() {
  const navigation = useNavigation();
  const route: RouteProp<{ params: { book: Book } }, 'params'> = useRoute();
  const { book } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerBook}>
          <Image style={styles.logo} source={book.imageUrl ? { uri: book.imageUrl } : noneBook} />
          <View style={styles.containerInfoBook}>
            <Text style={styles.titleBook}>{book.title}</Text>
            <Text>{book.author}</Text>
            <Text style={styles.textsBook}>{book.publisher}</Text>
            <Text style={styles.textsBook}>{book.year}</Text>
            <Text style={styles.textsBook}>{book.genre}</Text>
          </View>
        </View>
        <SecondaryButton title="add a comment" onPress={() => navigation.goBack()} />
        <PrimaryButton title="return book" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

export default BookDetailScreen;
