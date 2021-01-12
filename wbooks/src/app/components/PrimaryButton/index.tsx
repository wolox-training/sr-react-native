import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colorsGradient } from '@constants/colorsApp';
import ButtonCustom from '@interfaces/buttonCustom';

import styles from './styles';

function PrimaryButton({ title, onPress }: ButtonCustom) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colorsGradient}
        style={styles.button}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>
        <Text style={styles.titleButton}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default PrimaryButton;
