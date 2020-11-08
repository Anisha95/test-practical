import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Circle extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <LinearGradient
        colors={['#f35585', '#000080', '#0eb5ba']}
        style={styles.mainView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Gallery')}
          style={styles.subView}>
          <Text style={styles.textStyle}>GALLERY</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    top: '88%',
    left: '73%',
    elevation: 7,
    alignItems: 'center',
  },
  subView: {
    marginTop: 5,
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#dadada',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 11,
    top: '37%',
    fontWeight: 'bold',
    color: '#000080',
  },
});
