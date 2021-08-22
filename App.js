import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Main from "./navigation/Main";

const Stack = createNativeStackNavigator();

export default function App(props) {
  const cartfunc = () => {
    console.log(props);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "About Screen",
            headerRight: () => {
              return (
                <Button
                  title="Cart"
                  color="orange"
                  onPress={() => cartfunc()}
                />
              );
            },
          }}
        />
        <Stack.Screen name="Contact" children={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
