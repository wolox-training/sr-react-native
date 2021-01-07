import { StyleSheet } from 'react-native';
import { colorsApp } from '@constants/colorsApp';

export default StyleSheet.create({
  headerStyle: {
    height: 120,
    backgroundColor: colorsApp.light
  },
  headerTitle: {
    color: colorsApp.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 18
  },
  headerLeft: {
    paddingLeft: 25
  },
  headerRight: {
    paddingRight: 25
  },
  headerImage: {
    height: '100%',
    width: '100%',
    backgroundColor: colorsApp.light
  }
});
