import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Weather from "../components/weather.js";
import colors from "../shared/constants.js";
import Engine from "../Engine.js";
import NewsScreen from "../components/NewsScreen";

export default function Home({ location, navigation }) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
  });
  // init for search text input
  const [value, onChangeText] = React.useState("");

  let countryName = "";
  // submit search query
  const handleSearch = (query) => {
    getWeather(query);
  };
  // on pressed clear
  const handleClear = () => {
    onChangeText("");
  };

  const handleNewsButtonPress = () => {
    navigation.navigate("NewsScreen", {
      country: countryName,
    });
  };
  // get weather function
  const getWeather = async (q) => {
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=07875ba0bf52fc9064b690c3f8e2d3e4`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        country: resJSON.sys.country,
        condition: resJSON.weather[0].main,
      });
      return resJSON.sys.country;
      handleClear();
    } catch (e) {
      handleClear();
      alert("Invalid city name !");
    }
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <SafeAreaView style={styles.weathercontainer}>
      <View style={styles.inputview}>
        <Ionicons
          name="ios-search"
          size={16}
          color="grey"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.textinput}
          placeholderTextColor={colors.text}
          placeholder="Name of the city..."
          value={value}
          onSubmitEditing={(e) => handleSearch(e.nativeEvent.text)}
          onChangeText={(text) => onChangeText(text)}
        ></TextInput>
        <Ionicons
          name="ios-close"
          size={23}
          color="grey"
          style={styles.cancelIcon}
          onPress={() => handleClear()}
        />
      </View>
      <Weather
        city={weather.city}
        country={weather.country}
        condition={weather.condition}
        temperature={weather.temp + " °C"}
      />
      <Button onPress={handleNewsButtonPress} title="News" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  weathercontainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputview: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 50,
    height: Dimensions.get("screen").height * 0.06,
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    backgroundColor: colors.background,
    color: colors.text,
  },

  searchIcon: {
    paddingRight: 10,
  },

  cancelIcon: {
    paddingRight: 5,
  },

  textinput: {
    flex: 1,
    color: colors.text,
  },
});
