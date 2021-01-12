import { colorsApp } from '@constants/colorsApp';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.light,
    padding: 25
  },
  card: {
    padding: 25,
    borderRadius: 6,
    marginTop: 15,
    backgroundColor: colorsApp.white,
    shadowColor: colorsApp.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5
  },
  containerBook: {
    flexDirection: 'row',
    marginBottom: 15
  },
  logo: {
    width: 80,
    height: 110,
    marginRight: 15
  },
  containerInfoBook: {
    flex: 1
  },
  titleBook: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 18,
    marginBottom: 10
  },
  textsBook: {
    color: colorsApp.muted,
    textTransform: 'capitalize'
  }
});
