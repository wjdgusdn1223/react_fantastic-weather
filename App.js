import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Weather from "./Weather"

export default class App extends React.Component {
  state = {
    isLoaded: true
  }
  render() {
    const { isLoaded } = this.state;
    console.log(isLoaded);
    return (
      <View style={styles.container}>
        {isLoaded ? <Weather /> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fantastic weather</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "wrap"
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end"
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
    paddingLeft: 25
  }
});
