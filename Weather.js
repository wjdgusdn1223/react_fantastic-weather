import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";

export default class Weather extends Component{
    render(){
        return (
            <LinearGradient 
                colors={["#00C6FB", "#005BEA"]} 
                style={styles.container} 
            >
                <View style={styles.upper}>
                    <Text>Icon here</Text>
                    <Text style={styles.temp}>35º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining like a MF</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
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