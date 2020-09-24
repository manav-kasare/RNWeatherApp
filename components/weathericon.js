import React from "react";
import { Dimensions, View, Image } from "react-native";

const WeatherIcon = ({ condition }) => {
  var icon;

  switch (condition) {
    case "Clouds":
      icon = require("../assets/icons/icons8-cloud-50.png");
      break;
    case "Clear":
      icon = require("../assets/icons/icons8-smiling-sun-50.png");
      break;
    case "Haze":
      icon = require("../assets/icons/icons8-haze-50.png");
      break;
    case "Hail":
      icon = require("../assets/icons/icons8-hail-50.png");
      break;
    case "Fog":
      icon = require("../assets/icons/icons8-fog-50.png");
      break;
    case "Tornado":
      icon = require("../assets/icons/icons8-tornado-50-2.png");
      break;
    case "Dust":
      icon = require("../assets/icons/icons8-cloud-50.png");
      break;
    case "Mist":
      icon = require("../assets/icons/icons8-cloud-50.png");
      break;
    case "Snow":
      icon = require("../assets/icons/icons8-light-snow-50.png");
      break;
    case "Rain":
      icon = require("../assets/icons/icons8-heavy-rain-50.png");
      break;
    case "Drizzle":
      icon = require("../assets/icons/icons8-light-rain-50.png");
      break;
    case "Thunderstorm":
      icon = require("../assets/icons/icons8-cloud-50.png");
      break;
    default:
      icon = require("../assets/icons/icons8-smiling-sun-50.png");
      break;
  }
  return (
    <View style={styles.icon}>
      <Image source={icon} style={styles.image} />
    </View>
  );
};

const styles = {
  icon: {
    width: 50,
    height: Dimensions.get("screen").height * 0.06,
    marginRight: 40,
  },
  image: {
    alignSelf: "center",
    width: 40,
    height: 40,
  },
};

export default WeatherIcon;
