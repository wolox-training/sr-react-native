import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colorsApp } from '@constants/colorsApp';
import HomeScreen from '@app/screens/Home';
import { routesName } from '@constants/routesName';

import styles from './styles';

const Tab = createBottomTabNavigator();

const screens = [
  {
    route: routesName.home.route,
    iconNameActive: require('@assets/toolBar/ic_library_active.png'),
    iconName: require('@assets/toolBar/ic_library.png'),
    component: HomeScreen
  },
  {
    route: routesName.wishlist.route,
    iconNameActive: require('@assets/toolBar/ic_wishlist_active.png'),
    iconName: require('@assets/toolBar/ic_wishlist.png'),
    component: HomeScreen
  },
  {
    route: routesName.settings.route,
    iconNameActive: require('@assets/toolBar/ic_settings_active.png'),
    iconName: require('@assets/toolBar/ic_settings.png'),
    component: HomeScreen
  }
];

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={routesName.home.route}
      tabBarOptions={{
        activeTintColor: colorsApp.primary
      }}>
      {screens.map((screen, i) => (
        <Tab.Screen
          key={i}
          name={screen.route}
          component={screen.component}
          options={() => ({
            tabBarIcon: ({ focused }) => (
              <Image style={styles.iconBar} source={focused ? screen.iconNameActive : screen.iconName} />
            )
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

export default HomeTabs;
