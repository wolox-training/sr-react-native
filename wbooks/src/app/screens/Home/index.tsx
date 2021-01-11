import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { routesName } from '@constants/routesName';

import styles from './styles';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text>Home screen</Text>
      <Button title="navegar" onPress={() => navigation.navigate(routesName.bookDetail.route)} />
    </ScrollView>
  );
}

export default HomeScreen;
