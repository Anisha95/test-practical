import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainPage from '../screens/MainPage';
import Details from '../screens/Details';
import Gallery from '../screens/Gallery';

const MainStack = createStackNavigator({
  MainPage: {
    screen: MainPage,
  },
  Details: {
    screen: Details,
  },
  Gallery: {
    screen: Gallery,
  }
},
  {
    initialRouteName: 'MainPage',
    headerMode: false,
  }
);

export default createAppContainer(MainStack);
