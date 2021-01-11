import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { routesName } from '@constants/routesName';
import icBack from '@assets/header/ic_back.png';
import icSearch from '@assets/header/ic_search.png';
import icNotifications from '@assets/header/ic_notifications.png';
import bcNavBar from '@assets/header/bc_nav_bar.png';

import styles from './navigationStyles';

export const NavigationsOptsStack = {
  general: {
    headerBackground() {
      return <Image style={styles.headerImage} source={bcNavBar} />;
    },
    headerStyle: styles.headerStyle
  },
  home: {
    headerTitle() {
      return <Text style={styles.headerTitle}>{routesName.home.label}</Text>;
    },
    headerLeft() {
      return (
        <TouchableOpacity style={styles.headerLeft} onPress={() => console.tron.log('Notifications')}>
          <Image source={icNotifications} />
        </TouchableOpacity>
      );
    },
    headerRight() {
      return (
        <TouchableOpacity style={styles.headerRight} onPress={() => console.tron.log('Search')}>
          <Image source={icSearch} />
        </TouchableOpacity>
      );
    }
  },
  bookDetail: {
    headerTitle() {
      return <Text style={styles.headerTitle}>{routesName.bookDetail.label}</Text>;
    },
    headerLeft(props: any) {
      return (
        <TouchableOpacity style={styles.headerLeft} onPress={props.onPress}>
          <Image source={icBack} />
        </TouchableOpacity>
      );
    }
  }
};
