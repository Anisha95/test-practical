/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import store from './screens/store';
import {Provider} from 'react-redux';
import Navigator from './route/RouteStack';

// new codes to be kickstarted..

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
       <Navigator />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
