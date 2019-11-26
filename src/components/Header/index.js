import React from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import {LanguageContext, withTranslation} from 'react-i18next-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Wordmark from './assets/wmms.svg';

import en from './i18n/en';
import fr from './i18n/fr';

const ns = 'header';

const resources = {
  en,
  fr,
};

('use strict');

class Header extends React.Component {
  static contextType = LanguageContext;
  componentDidMount() {
    for (const [lang, bundle] of Object.entries(resources)) {
      this.context.i18next.addResourceBundle(lang, ns, bundle);
    }
  }
  render() {
    const t = this.props.t;
    return (
      <LanguageContext.Consumer>
        {({toggleLanguage}) => (
          <View style={styles.View}>
            <View style={styles.Wordmark}>
              <Wordmark />
              <Text>{t('test')}</Text>
            </View>
            <View style={styles.UserView}>
              <TouchableHighlight
                style={styles.UserButton}
                onPress={() => {
                  toggleLanguage('fr');
                }}>
                <Icon name="user" style={styles.UserIcon} />
              </TouchableHighlight>
            </View>
          </View>
        )}
      </LanguageContext.Consumer>
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

export default withTranslation(ns)(Header);
