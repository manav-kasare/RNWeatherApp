import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

import colors from "../shared/constants";

export default function Onboarding({ navigation }) {
  const handleOnPress = () => {
    navigation.replace("Home");
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.text}>WEATHER APP</Text>
      </View>
      <View style={styles.getStarted}>
        <Button
          title="Get Started"
          onPress={handleOnPress}
          style={styles.getStartedButton}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = {
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.text,
    fontSize: 30,
    letterSpacing: 2,
  },
  getStarted: {
    marginTop: 10,
  },
  getStartedButton: {
    color: colors.text,
    backgroundColor: "white",
  },
};
