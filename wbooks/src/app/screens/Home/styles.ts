import { colorsApp } from '@constants/colorsApp';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.light,
    padding: 25
  },
  containerList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    padding: 20,
    borderRadius: 6,
    backgroundColor: colorsApp.white,
    shadowColor: colorsApp.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 2
  },
  logo: {
    width: 60,
    height: 80
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 20,
    color: colorsApp.black,
    maxWidth: '90%'
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    color: colorsApp.muted,
    maxWidth: '90%'
  }
});
