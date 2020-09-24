import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Article from "./screens/Article";
import Onboarding from "./screens/onboarding";
import colors from "./shared/constants";
import NewsScreen from "./components/NewsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} location="sydney" />}
        </Stack.Screen>
        <Stack.Screen name="NewsScreen" options={{ headerShown: false }}>
          {(props) => <NewsScreen {...props} country="au" />}
        </Stack.Screen>
        <Stack.Screen
          name="Article"
          options={{ headerShown: false }}
          component={Article}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
