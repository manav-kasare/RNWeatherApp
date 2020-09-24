import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";

import Components from "../components/article_components/components";
import colors from "../shared/constants";

function NewsScreen({ country, navigation }) {
  // get new article function
  const getArticleList = async (q) => {
    const apiRes = await fetch(
      `http://newsapi.org/v2/top-headlines?country=${q}&apiKey=cf0c655acdf64e688471209acb36b3eb`
    );
    const resJSON = await apiRes.json();
    let articleList = resJSON.articles;
    let articles = [];
    for (var i = 0; i < articleList.length; i++) {
      articles.push(
        <TouchableHighlight onPress={handleOnPress} style={styles.article}>
          <Components title={articleList[i].title} />
        </TouchableHighlight>
      );
    }
    return articles;
  };
  const renderArticles = () => {
    let all_articles = [];
    getArticleList("au").then((data) => (all_articles = data));
    return all_articles;
  };
  //   getArticleList("au").then(() => {
  //     for (var i = 0; i < articleList.length; i++) {
  //       setAllArticles(
  //         all_articles.push(
  //           <TouchableHighlight onPress={handleOnPress} style={styles.article}>
  //             <Components title={articleList[i].title} />
  //           </TouchableHighlight>
  //         )
  //       );
  //     }
  //     console.log(all_articles.length);
  //   });
  //   console.log(all_articles.length);

  // touchable highlight onpress
  const handleOnPress = () => {
    navigation.navigate("Article");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.newscontainer}>
        <Text style={styles.newsHeadline}>Top Headlines</Text>
        <ScrollView>
          <View style={styles.header} />
          {renderArticles()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  newscontainer: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: 15,
    padding: 10,
  },
  newsHeadline: {
    color: colors.text,
    fontSize: 20,
    marginBottom: 5,
  },
  header: {
    padding: 10,
  },
  article: {
    backgroundColor: "rgba(255,255,255,0.05)",
    width: Dimensions.get("screen").width - 70,
    height: Dimensions.get("screen").height * 0.16,
    borderRadius: 15,
    marginTop: 10,
  },
};

export default NewsScreen;
