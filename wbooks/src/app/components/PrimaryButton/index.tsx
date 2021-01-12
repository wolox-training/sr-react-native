import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { colorsGradient } from '@constants/colorsApp';
import ButtonCustom from '@interfaces/buttonCustom';

import styles from './styles';

function PrimaryButton({ title }: ButtonCustom) {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <TouchableOpacity onPress={goBack}>
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
