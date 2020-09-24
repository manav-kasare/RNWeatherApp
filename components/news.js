import React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native";

import colors from "../shared/constants.js";
import Components from "./article_components/components.js";

function News({ navigation }) {
  const handleOnPress = () => {
    navigation.navigate("Article");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.newsHeadline}>Top Headlines</Text>
        </View>
        <TouchableHighlight onPress={handleOnPress} style={styles.article}>
          <Components />
        </TouchableHighlight>
        <TouchableHighlight onPress={handleOnPress} style={styles.article}>
          <Components />
        </TouchableHighlight>
        <TouchableHighlight onPress={handleOnPress} style={styles.article}>
          <Components />
        </TouchableHighlight>
        <TouchableHighlight onPress={handleOnPress} style={styles.article}>
          <Components />
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: colors.background,
    width: Dimensions.get("screen").width - 50,
    height: Dimensions.get("screen").height * 0.6,
    borderRadius: 15,
    padding: 10,
  },
  header: {
    padding: 10,
  },
  newsHeadline: {
    color: colors.text,
  },
  article: {
    backgroundColor: colors.background,
    width: Dimensions.get("screen").width - 70,
    height: Dimensions.get("screen").height * 0.16,
    borderRadius: 15,
    marginTop: 10,
  },
};

export default News;
