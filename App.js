import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import Weather from "./Weather"

const API_KEY = "f4726a003d7d3f3fa4c3f3d44553fbed";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => { 
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  
  _getWeather= (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
      .then(potato => potato.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        })
      })
      .catch(error => {
        this.setState({
          error: error
        });
      })
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather temp={Math.floor(temperature - 273.15)} name={name} /> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fantastic weather!!</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  errorText: {
      color: "red",
      backgroundColor: "transparent",
      marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 50
  }
});
