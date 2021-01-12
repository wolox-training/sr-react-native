import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonCustom from '@interfaces/buttonCustom';

import styles from './styles';

function SecondaryButton({ title }: ButtonCustom) {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <TouchableOpacity onPress={goBack} style={styles.buttonClear}>
      <Text style={styles.titleButtonClear}>{title}</Text>
    </TouchableOpacity>
  );
}

export default SecondaryButton;
