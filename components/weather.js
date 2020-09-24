import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

import colors from "../shared/constants.js";
import WeatherIcon from "./weathericon.js";

const Weather = ({ temperature, city, country, condition, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.upperLeftSide}>
          <Text style={styles.city}>{city} | </Text>
          <Text style={styles.country}>{country} </Text>
        </View>
        <View style={styles.lowerLeftSide}>
          <Text style={styles.temperature}>{temperature} | </Text>
          <Text style={styles.condition}>{condition}</Text>
        </View>
      </View>
      <WeatherIcon condition={condition} />
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    backgroundColor: colors.background,
    width: Dimensions.get("screen").width - 50,
    height: Dimensions.get("screen").height * 0.1,
    borderRadius: 15,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSide: {
    flexDirection: "column",
  },
  upperLeftSide: {
    flexDirection: "row",
  },
  lowerLeftSide: {
    paddingTop: 5,
    flexDirection: "row",
  },
  city: {
    fontSize: 20,
    color: colors.text,
  },
  country: {
    fontSize: 20,
    color: colors.text,
  },
  temperature: {
    fontSize: 20,
    color: colors.text,
  },
  condition: {
    fontSize: 20,
    color: colors.text,
  },
};

export default Weather;
