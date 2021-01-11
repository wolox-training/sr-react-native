import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import noneBook from '@assets/books/noneBook.png';
import { BtnPrimary, BtnSecondary } from '@app/components/ButtonsApp';

import styles from './styles';

function BookDetailScreen({ navigation }: any) {
  const stateBook = useSelector(state => state);
  const { books }: any = stateBook;
  const { book } = books;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerBook}>
          <View style={styles.containerLogo}>
            <Image style={styles.logo} source={book.imageUrl ? { uri: book.imageUrl } : noneBook} />
          </View>
          <View style={styles.containerInfoBook}>
            <Text style={styles.titleBook}>{book.title}</Text>
            <Text>{book.author}</Text>
            <Text style={styles.textsBook}>{book.publisher}</Text>
            <Text style={styles.textsBook}>{book.year}</Text>
            <Text style={styles.textsBook}>{book.genre}</Text>
          </View>
        </View>
        <BtnSecondary title="add a comment" onPress={() => navigation.goBack()} />
        <BtnPrimary title="return book" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

export default BookDetailScreen;
