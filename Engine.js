import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, View, Dimensions } from "react-native";

import Weather from "./components/weather.js";
import News from "./components/news.js";
import colors from "./shared/constants.js";

function Engine({ location }) {
  // init for weather state variables
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
  });
  // init for search text input
  const [value, onChangeText] = React.useState("");
  // init for news article state variables
  const [article, setArticle] = useState({
    title: [],
    author: [],
    publishedAt: [],
    description: [],
    url: [],
    content: [],
    urlToImage: [],
  });
  const [total, setTotal] = useState(0);
  // init of variable arrays
  let titleArr = [];
  let authorArr = [];
  let publishedAtArr = [];
  let descriptionArr = [];
  let urlArr = [];
  let contentArr = [];
  let urlToImageArr = [];

  //Search Bar

  // submit search query
  const handleSearch = (query) => {
    getWeather(query);
  };
  // on pressed clear
  const handleClear = () => {
    onChangeText("");
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
      handleClear();
    } catch (e) {
      handleClear();
      alert("Invalid city name !");
    }
    getArticle(resJSON.sys.country);
  };
  // get new article function
  const getArticle = async (q) => {
    const apiRes = await fetch(
      `http://newsapi.org/v2/top-headlines?country=${q}&apiKey=cf0c655acdf64e688471209acb36b3eb`
    );
    const resJSON = await apiRes.json();
    console.log("get Articles");
    setTotal(resJSON.totalResults);
    const articleList = resJSON.articles;
    for (var i = 0; i < 10; i++) {
      titleArr.push(articleList[i].title);
      if (articleList[i].author == null) authorArr.push("");
      else authorArr.push(articleList[i].author);
      publishedAtArr.push(articleList[i].publishedAt);
      descriptionArr.push(articleList[i].description);
      urlArr.push(articleList[i].url);
      urlToImageArr.push(articleList[i].urlToImage);
      contentArr.push(articleList[i].content);
    }
    console.log(authorArr.length);
    setArticle({
      title: titleArr,
      author: authorArr,
      publishedAt: publishedAtArr,
      description: descriptionArr,
      url: urlArr,
      urlToImage: urlToImageArr,
      content: contentArr,
    });
  };
  // handle Search from the form

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <>
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
      <News />
    </>
  );
}
const styles = {
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
};

export default Engine;
