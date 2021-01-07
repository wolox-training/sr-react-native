import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetailScreen from '@app/screens/Home/BookDetail';
import { routesName } from '@constants/routesName';

import HomeTabs from '../index';

import styles from './styles';

const Stack = createStackNavigator();
const screens = [
  {
    label: routesName.home.label,
    route: routesName.home.route,
    component: HomeTabs
  },
  {
    label: routesName.bookDetail.label,
    route: routesName.bookDetail.route,
    component: BookDetailScreen
  }
];

function HeaderBackground() {
  return <Image source={require('@assets/header/bc_nav_bar.png')} style={styles.headerImage} />;
}

function HeaderTitle(props: any, label: string) {
  return (
    <Text {...props} style={styles.headerTitle}>
      {label}
    </Text>
  );
}

function HeaderLeft(route: string) {
  const navigation = useNavigation();
  const source =
    route === routesName.home.route
      ? require('@assets/header/ic_notifications.png')
      : require('@assets/header/ic_back.png');
  const onPress =
    route === routesName.home.route ? () => console.tron.log('Notifications') : () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.headerLeft} onPress={onPress}>
      <Image source={source} />
    </TouchableOpacity>
  );
}

function HeaderRight(route: string) {
  return (
    route === routesName.home.route && (
      <TouchableOpacity style={styles.headerRight} onPress={() => console.tron.log('Search')}>
        <Image source={require('@assets/header/ic_search.png')} />
      </TouchableOpacity>
    )
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={routesName.home.route}>
      {screens.map((screen, i) => (
        <Stack.Screen
          key={i}
          name={screen.route}
          component={screen.component}
          options={{
            headerStyle: styles.headerStyle,
            headerBackground: HeaderBackground,
            headerTitle: props => HeaderTitle(props, screen.label),
            headerLeft: () => HeaderLeft(screen.route),
            headerRight: () => HeaderRight(screen.route)
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default HomeStack;
