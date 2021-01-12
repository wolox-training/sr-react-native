import { StyleSheet } from 'react-native';
import { colorsApp } from '@constants/colorsApp';

export default StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center'
  },
  titleButton: {
    color: colorsApp.white,
    fontSize: 16,
    textTransform: 'uppercase'
  }
});
