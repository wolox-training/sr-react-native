import { colorsApp } from '@constants/colorsApp';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonClear: {
    padding: 15,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colorsApp.primary
  },
  titleButtonClear: {
    color: colorsApp.primary,
    fontSize: 16,
    textTransform: 'uppercase'
  }
});
