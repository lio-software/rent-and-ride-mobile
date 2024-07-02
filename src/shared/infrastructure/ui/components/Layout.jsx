import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import { StatusBar } from 'expo-status-bar';

const Layout = ({ children, title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <AppBar text={title} />
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    padding: 17,
    paddingTop: 0,
  },
});

export default Layout;
