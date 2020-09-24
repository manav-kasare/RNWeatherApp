import React from "react";
import {
  Button,
  SafeAreaView,
  View,
  Dimensions,
  Image,
  Text,
} from "react-native";

import colors from "../shared/constants";

function Article({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.articleHeading}>Article</Text>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageDiv}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://s3.eu-central-1.amazonaws.com/s3.cointelegraph.com/uploads/2020-05/aa30a462-8a44-4170-9a1e-fe11a3836018.jpg",
              }}
            />
          </View>
          <View style={styles.headerDetails}>
            <Text style={styles.authorName}>
              Cointelegraph By Benjamin Pirus
            </Text>
            <Text style={styles.publishedDate}>2020-05-19T20:35:28Z</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            Americans Are Getting Screwed' With Lab Testing, Says Pomp
            Interviewee
          </Text>
          <Text style={styles.description}>
            Julia Cheek, CEO of at-home medical testing company Everlywell,
            called U.S. lab testing problematic.
          </Text>
          <Text style={styles.content}>
            In a recent interview with Anthony "Pomp" Pompliano, Julia Cheek,
            CEO of home medical testing company Everlywell, called for major
            reform in the U.S. lab testing sector. \r\nIve been fighting this
            battle for five years, talking about how lab testing is broken a…
          </Text>
          <Text style={styles.readmore}>Read More...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  screen: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 15,
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 10,
    alignSelf: "center",
    width: Dimensions.get("screen").width - 25,
    backgroundColor: colors.black,
    marginTop: 20,
    marginDown: 20,
  },
  articleHeading: {
    color: colors.text,
    alignSelf: "center",
    fontSize: 20,
    paddingTop: 5,
  },
  authorName: {
    color: colors.text,
    fontSize: 17,
  },
  publishedDate: {
    paddingTop: 5,
    fontSize: 17,
    color: colors.text,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  headerDetails: {
    paddingTop: 10,
    flexDirection: "column",
    width: Dimensions.get("screen").width - 200,
    marginLeft: 15,
    backgroundColor: colors.black,
  },
  imageDiv: {
    width: Dimensions.get("screen").width - 200,
    height: 150,
    alignSelf: "flex-start",
    backgroundColor: colors.black,
    borderRadius: 15,
  },
  image: {
    width: Dimensions.get("screen").width - 200,
    height: 150,
    borderRadius: 15,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    color: "rgba(255, 255, 255, 0.8)",
    paddingTop: 20,
    fontWeight: "600",
    fontSize: 30,
  },
  description: {
    color: colors.text,
    paddingTop: 10,
    fontSize: 20,
  },
  content: {
    color: colors.text,
    paddingTop: 40,
    fontSize: 20,
  },
  readmore: {
    color: "dodgerblue",
    fontSize: 20,
  },
};

export default Article;
