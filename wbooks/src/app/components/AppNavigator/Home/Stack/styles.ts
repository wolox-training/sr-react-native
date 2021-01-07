import { StyleSheet } from 'react-native';
import { colorsApp } from '@constants/colorsApp';

export default StyleSheet.create({
  headerStyle: {
    height: 110,
    backgroundColor: colorsApp.light
  },
  headerTitle: {
    color: colorsApp.white,
    textTransform: 'uppercase',
    fontSize: 18,
    textShadowColor: colorsApp.textShadowColor,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5
  },
  headerLeft: {
    paddingLeft: 10
  },
  headerRight: {
    paddingRight: 10
  },
  headerImage: {
    height: '100%',
    width: '100%',
    backgroundColor: colorsApp.light
  }
});
