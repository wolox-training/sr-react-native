import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationsOptsStack } from '@config/navigation';
import { colorsApp } from '@constants/colorsApp';
import { routesName } from '@constants/routesName';
import HomeScreen from '@app/screens/Home';
import BookDetailScreen from '@app/screens/Home/BookDetail';
import icLibraryActive from '@assets/toolBar/ic_library_active.png';
import icLibrary from '@assets/toolBar/ic_library.png';
import icWishlistActive from '@assets/toolBar/ic_wishlist_active.png';
import icWishlist from '@assets/toolBar/ic_wishlist.png';
import icSettingsActive from '@assets/toolBar/ic_settings_active.png';
import icSettings from '@assets/toolBar/ic_settings.png';

import styles from './styles';

const Tab = createBottomTabNavigator();

const screensTabs = [
  {
    route: routesName.home.route,
    iconNameActive: icLibraryActive,
    iconName: icLibrary,
    component: HomeScreen
  },
  {
    route: routesName.wishlist.route,
    iconNameActive: icWishlistActive,
    iconName: icWishlist,
    component: HomeScreen
  },
  {
    route: routesName.settings.route,
    iconNameActive: icSettingsActive,
    iconName: icSettings,
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
      {screensTabs.map((screen, i) => (
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

const Stack = createStackNavigator();

const screensStack = [
  {
    ...routesName.home,
    component: HomeTabs,
    options: NavigationsOptsStack.home
  },
  {
    ...routesName.bookDetail,
    component: BookDetailScreen,
    options: NavigationsOptsStack.bookDetail
  }
];

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={routesName.home.route} screenOptions={NavigationsOptsStack.general}>
      {screensStack.map((screen, i) => (
        <Stack.Screen key={i} name={screen.route} component={screen.component} options={screen.options} />
      ))}
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
