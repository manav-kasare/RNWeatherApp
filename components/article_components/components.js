import React from "react";
import { View, Image, Text } from "react-native";

import colors from "../../shared/constants";

function Components({ title }) {
  return (
    <View style={{ flexDirection: "row", paddingRight: 20 }}>
      <View style={styles.imageDiv}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://s3.eu-central-1.amazonaws.com/s3.cointelegraph.com/uploads/2020-05/aa30a462-8a44-4170-9a1e-fe11a3836018.jpg",
          }}
        />
      </View>
      <View style={{ paddingRight: 100 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = {
  imageDiv: {
    marginLeft: 10,
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    color: colors.text,
    paddingLeft: 10,
    paddingTop: 20,
    fontSize: 15,
  },
};

export default Components;
