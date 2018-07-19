import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

//export default class Weather extends Component{
//    render(){
//        return (
//            <LinearGradient 
//                colors={["#00C6FB", "#005BEA"]} 
//                style={styles.container} 
//            >
//                <View style={styles.upper}>
//                    <Ionicons color="white" size={144} name="ios-rainy" />
//                    <Text style={styles.temp}>35º</Text>
//                </View>
//                <View style={styles.lower}>
//                    <Text style={styles.title}>Raining like a MF</Text>
//                    <Text style={styles.subtitle}>For more info look outside</Text>
//                </View>
//            </LinearGradient>
//        )
//    }
//}

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in house",
        subtitle: "Actually, outside of the house",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "B9B6EC"],
        title: "Cold as balls",
        subtitle: "Do you want a build a snowman? Fuck no.",
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay",
        icon: 'ios-rainy-outline'
    }
}

function Weather({ temp, name }){
    return(
        <LinearGradient 
            colors={name in weatherCases ? weatherCases[name].colors : ["#FEF253", "#304352"]} 
            style={styles.container} 
        >
            <View style={styles.upper}>
                <Ionicons 
                    color="white" 
                    size={144} 
                    name={name in weatherCases ? weatherCases[name].icon : "ios-help"} 
                />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>
                    {name in weatherCases ? weatherCases[name].title : name}
                </Text>
                <Text style={styles.subtitle}>
                    {name in weatherCases ? weatherCases[name].subtitle : "I don't know what that mean.."}
                </Text>
            </View>
        </LinearGradient>
    );
}

export default Weather;

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 5,
        fontWeight: "100"
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 36,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "100"
    },
    subtitle: {
        fontSize: 22,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 35,
        fontWeight: "normal"
    }
})