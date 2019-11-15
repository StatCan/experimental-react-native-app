import React from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Wordmark from './assets/wmms.svg';

('use strict');

class Header extends React.Component {
  render() {
    return (
      <View style={styles.View}>
        <View style={styles.Wordmark}>
          <Wordmark />
        </View>
        <View style={styles.UserView}>
          <TouchableHighlight style={styles.UserButton}>
            <Icon name="user" style={styles.UserIcon} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    height: 64,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderBottomColor: '#335075',
    borderBottomWidth: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Wordmark: {
    flex: 3,
  },
  UserView: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  UserButton: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  UserIcon: {
    fontSize: 32,
  },
});

export default Header;
