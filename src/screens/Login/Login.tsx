import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Header from '../../components/Header';
import LoginBody from '../../components/LoginBody';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <LoginBody />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
