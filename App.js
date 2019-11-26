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
  StatusBar,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header';
import Footer from './src/components/Footer';

import {LanguageContext, toggleLanguage, init} from 'react-i18next-context';

const defaultLang = 'en';
const UserContext = React.createContext();

export default class App extends React.Component<Props> {
  constructor() {
    super();
    this.state = {
      i18n: init({
        lang: defaultLang,
        toggleLanguage: lang => {
          this.setState(state => {
            toggleLanguage(lang);
            state.i18n.lang = lang;
            return state;
          });
        },
      }),
      user: null,
    };
  }

  render() {
    return (
      <>
        <LanguageContext.Provider value={this.state.i18n}>
          <UserContext.Provider value={this.state.user}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>
              <Header LanguageContext={LanguageContext} useSuspense={false} />
              <ScrollView style={styles.scrollView}>
                <View style={styles.body}>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Step One</Text>
                    <Text style={styles.sectionDescription}>
                      Edit <Text style={styles.highlight}>App.js</Text> to change this
                      screen and then come back to see your edits.
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>See Your Changes</Text>
                    <Text style={styles.sectionDescription}>
                      <ReloadInstructions />
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Debug</Text>
                    <Text style={styles.sectionDescription}>
                      <DebugInstructions />
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn More</Text>
                    <Text style={styles.sectionDescription}>
                      Read the docs to discover what to do next:
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn More</Text>
                    <Text style={styles.sectionDescription}>
                      Read the docs to discover what to do next:
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn More</Text>
                    <Text style={styles.sectionDescription}>
                      Read the docs to discover what to do next:
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn More</Text>
                    <Text style={styles.sectionDescription}>
                      Read the docs to discover what to do next:
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn More</Text>
                    <Text style={styles.sectionDescription}>
                      Read the docs to discover what to do next:
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn More</Text>
                    <Text style={styles.sectionDescription}>
                      Read the docs to discover what to do next:
                    </Text>
                  </View>
                </View>
              </ScrollView>
              <Footer />
            </SafeAreaView>
          </UserContext.Provider>
        </LanguageContext.Provider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});
