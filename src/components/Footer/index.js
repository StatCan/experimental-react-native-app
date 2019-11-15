import React from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

('use strict');

class Footer extends React.Component {
  render() {
    return (
      <View style={styles.View}>
        <TouchableHighlight style={styles.Button}>
          <Icon name="home" style={styles.Icon} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.Button}>
          <Icon name="search" style={styles.Icon} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.Button}>
          <Icon name="camera" style={styles.Icon} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.Button}>
          <Icon name="calendar" style={styles.Icon} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    height: 64,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  Button: {
    flex: 1,
  },
  Icon: {
    textAlign: 'center',
    fontSize: 34,
  },
});

export default Footer;
