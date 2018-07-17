import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexWrap: 'nowrap'
  },
  redView: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  yellowView: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow'
  }
});
