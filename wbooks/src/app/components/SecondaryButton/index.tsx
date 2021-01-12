import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonCustom from '@interfaces/buttonCustom';

import styles from './styles';

function SecondaryButton({ title, onPress }: ButtonCustom) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonClear}>
      <Text style={styles.titleButtonClear}>{title}</Text>
    </TouchableOpacity>
  );
}

export default SecondaryButton;
